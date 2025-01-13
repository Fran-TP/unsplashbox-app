'use client'

import {
  fetchUnsplashPhotos,
  type PhotoListResponse
} from '@/app/lib/data/fetchPhotos'
import PhotoCard from './photo-card'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { GallerySkeleton } from '../components/skeletons'
import Masonry from 'react-layout-masonry'

interface PhotoGalleryProps {
  // photoCollectionPromise: Promise<PhotoListResponse>
  query: string
}

const INITIAL_PAGE = 1
const ITEMS_GAP = 28
const responsiveColumnCounts = {
  '320': 1,
  '640': 2,
  '1024': 3,
  '1280': 4
}

const PhotoGallery = ({ query }: PhotoGalleryProps) => {
  const [photos, setPhotos] = useState<PhotoListResponse['results']>([])
  const [latestPhotoIds, setLatestPhotoIds] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(true)
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(INITIAL_PAGE)

  useEffect(() => {
    setLoading(true)
    fetchUnsplashPhotos({ perPage: 15, query, page })
      .then(({ results, total_pages }) => {
        const distinctPhotos = results.filter(
          ({ id }) => !latestPhotoIds.has(id)
        )

        setLatestPhotoIds(new Set(results.map(photo => photo.id)))
        setPhotos(photos.concat(distinctPhotos))
        setTotalPages(total_pages)

        setLoading(false)
      })
      .catch(() => {
        console.error('Failed to fetch photos')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [query, page])

  const handleClick = () => {
    setPage(page + 1)
  }

  return (
    <div className="flex flex-col h-full justify-center items-center pt-14 px-14 mb-7">
      {photos.length > 0 && (
        <Masonry
          columns={responsiveColumnCounts}
          gap={ITEMS_GAP}
          className={clsx(loading && 'mb-7')}
        >
          {photos.map(image => (
            <PhotoCard
              key={image.id}
              urls={image.urls}
              altDescription={image.alt_description ?? 'Unsplash Image'}
              width={image.width}
              height={image.height}
            />
          ))}
        </Masonry>
      )}
      {loading && <GallerySkeleton />}
      {page < totalPages && (
        <button
          type="button"
          className="px-2 py-1 text-lg text-white bg-gray-800 border-2 border-gray-700 rounded-lg w-fit mb-2 mt-5"
          onClick={handleClick}
        >
          Load More
        </button>
      )}
    </div>
  )
}

export default PhotoGallery
