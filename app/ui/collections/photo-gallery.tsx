'use client'

import {
  fetchUnsplashPhotos,
  type PhotoListResponse
} from '@/app/lib/data/fetchPhotos'
import PhotoCard from './photo-card'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { GallerySkeleton, PhotoSkeleton } from '../components/skeletons'

interface PhotoGalleryProps {
  // photoCollectionPromise: Promise<PhotoListResponse>
  query: string
}

const INITIAL_PAGE = 1

const PhotoGallery = ({ query }: PhotoGalleryProps) => {
  const [photos, setPhotos] = useState<PhotoListResponse['results']>([])
  const [latestPhotoIds, setLatestPhotoIds] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(false)
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
        setLoading(false)
      })
  }, [query, page])

  const handleClick = () => {
    setPage(page + 1)
  }

  return (
    <div className="flex flex-col h-full justify-center items-center pt-14 px-14 mb-7">
      {photos.length > 0 ? (
        <section
          className={'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-x-7'}
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
        </section>
      ) : (
        <p className="font-light text-lg text-gray-300">
          No photos found for <strong>{query}</strong>
        </p>
      )}
      {loading && <GallerySkeleton />}
      {page < totalPages && (
        <button
          type="button"
          className="px-2 py-1 text-lg text-white bg-gray-800 border-2 border-gray-700 rounded-md w-fit mb-2"
          onClick={handleClick}
        >
          Load More
          {loading && <p>xin</p>}
        </button>
      )}
    </div>
  )
}

export default PhotoGallery
