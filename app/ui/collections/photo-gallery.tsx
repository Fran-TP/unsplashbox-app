'use client'

import type { PhotoListResponse } from '@/app/lib/data/fetchPhotos'
import PhotoCard from './photo-card'
import clsx from 'clsx'
import { use } from 'react'

interface PhotoGalleryProps {
  photoCollectionPromise: Promise<PhotoListResponse>
}

const PhotoGallery = ({ photoCollectionPromise }: PhotoGalleryProps) => {
  const { results: photoCollection } = use(photoCollectionPromise)

  return (
    <section
      className={clsx('p-14', {
        'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-x-7':
          photoCollection.length > 0,
        'grid place-items-center flex-grow h-full': photoCollection.length === 0
      })}
    >
      {photoCollection.length > 0 ? (
        photoCollection.map(image => (
          <PhotoCard
            key={image.id}
            urls={image.urls}
            altDescription={image.alt_description ?? 'Unsplash Image'}
            width={image.width}
            height={image.height}
          />
        ))
      ) : (
        <p className="text-center text-lg text-light/80">No photos found</p>
      )}
    </section>
  )
}

export default PhotoGallery
