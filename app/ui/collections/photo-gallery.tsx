'use client'

import {
  fetchUnsplashPhotos,
  type PhotoListResponse
} from '@/app/lib/data/fetchPhotos'
import PhotoCard from './photo-card'
import clsx from 'clsx'
import { use, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

interface PhotoGalleryProps {
  // photoCollectionPromise: Promise<PhotoListResponse>
  query: string
}

const INITIAL_PAGE = 1

const PhotoGallery = ({ query }: PhotoGalleryProps) => {
  const [photos, setPhotos] = useState<PhotoListResponse['results']>([])
  const queryParams = useSearchParams()
  const [page, setPage] = useState(INITIAL_PAGE)

  console.log(page)

  useEffect(() => {
    fetchUnsplashPhotos({
      perPage: 15,
      query
    }).then(({ results, total }) => {
      console.log(total)
      setPhotos(results)
    })
  }, [query])

  useEffect(() => {
    if (page === INITIAL_PAGE) return

    fetchUnsplashPhotos({
      page,
      perPage: 5,
      query: queryParams.get('query') ?? 'popular'
    }).then(({ results }) => {
      console.log(results, photos)
      setPhotos(photos.concat(results))
    })
  }, [page])

  const handleClick = () => {
    setPage(prev => prev + 2)
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
