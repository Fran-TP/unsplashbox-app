'use client'

import {
  fetchUnsplashPhotos,
  type PhotoListResponse
} from '@/app/lib/data/fetchPhotos'
import PhotoCard from './photo-card'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

interface PhotoGalleryProps {
  // photoCollectionPromise: Promise<PhotoListResponse>
  query: string
}

const INITIAL_PAGE = 1

const PhotoGallery = ({ query }: PhotoGalleryProps) => {
  const [photos, setPhotos] = useState<PhotoListResponse['results']>([])
  const [latestPhotosId, setLatestPhotosId] = useState<string[]>([])
  const [page, setPage] = useState(INITIAL_PAGE)

  useEffect(() => {
    fetchUnsplashPhotos({ perPage: 15, query, page }).then(
      ({ results, total_pages: _ }) => {
        setLatestPhotosId(results.map(photo => photo.id))

        const uniquePhotos = results.filter(
          ({ id }) => !latestPhotosId.includes(id)
        )

        setPhotos(photos.concat(uniquePhotos))
      }
    )
  }, [query, page])

  const handleClick = () => {
    setPage(page + 1)
  }

  return (
    <section
      className={clsx('p-14', {
        'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-x-7':
          photos.length > 0,
        'grid place-items-center flex-grow h-full': photos.length === 0
      })}
    >
      {photos.length > 0 ? (
        <>
          {photos.map(image => (
            <PhotoCard
              key={image.id}
              urls={image.urls}
              altDescription={image.alt_description ?? 'Unsplash Image'}
              width={image.width}
              height={image.height}
            />
          ))}

          <button
            type="button"
            onClick={handleClick}
            className="w-full py-4 text-center text-light/80 border-t border-gray-700"
          >
            Load more
          </button>
        </>
      ) : (
        <p className="text-center text-lg text-light/80">No photos found</p>
      )}
    </section>
  )
}

export default PhotoGallery
