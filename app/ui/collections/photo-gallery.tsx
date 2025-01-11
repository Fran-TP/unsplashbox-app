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
  const [latestPhotosId, setLatestPhotosId] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(INITIAL_PAGE)

  useEffect(() => {
    setLoading(true)
    fetchUnsplashPhotos({ perPage: 15, query, page })
      .then(({ results, total_pages }) => {
        setLatestPhotosId(results.map(photo => photo.id))

        const uniquePhotos = results.filter(
          ({ id }) => !latestPhotosId.includes(id)
        )
        console.log(total_pages)
        setPhotos(photos.concat(uniquePhotos))
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
    <div className="flex flex-col h-full justify-center items-center pt-14 px-14">
      {photos.length > 0 && (
        <section
          className={clsx({
            'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-x-7':
              photos.length > 0,
            'grid place-items-center flex-grow h-full': photos.length === 0
          })}
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
