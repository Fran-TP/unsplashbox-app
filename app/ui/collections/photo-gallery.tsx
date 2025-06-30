'use client'

import PhotoCard from './photo-card'
import clsx from 'clsx'
import { GallerySkeleton } from '../components/skeletons'
import Masonry from 'react-layout-masonry'
import { useGallery } from '@/app/hooks/useGallery'
import { useCallback, useEffect, useRef } from 'react'
import { useNearScreen } from '@/app/hooks/useNearScreen'
import { useRouter } from 'next/navigation'

interface PhotoGalleryProps {
  query: string
}

const ITEMS_GAP = 28
const INTERSECTION_MARGIN = '600px'
const responsiveColumnCounts = {
  '320': 1,
  '640': 2,
  '1024': 3,
  '1280': 4
}

const PhotoGallery = ({ query }: PhotoGalleryProps) => {
  const { push } = useRouter()
  const { photos, loading, page, totalPages, handleNextPage } = useGallery({
    query
  })
  const externalRef = useRef<HTMLDivElement>(null)
  const { isNearScreen } = useNearScreen({
    distance: INTERSECTION_MARGIN,
    externalRef
  })

  // biome-ignore lint: don't needed add more dependencies
  const onNextPage = useCallback(() => {
    if (!loading && page < totalPages) handleNextPage()
  }, [page, totalPages, loading])

  const handlePhotoClick =
    ({ id }: { id: string }) =>
    () => {
      push(`/photos/${id}`)
    }

  useEffect(() => {
    if (isNearScreen) onNextPage()
  }, [isNearScreen, onNextPage])

  return (
    <div className="mb-7 flex h-full flex-col items-center justify-center px-14 pt-14">
      {photos.length > 0 ? (
        <>
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
                onClick={handlePhotoClick({ id: image.id })}
              />
            ))}
          </Masonry>
          {loading && (
            <div className="mt-4 text-center text-gray-600 text-sm">Loading more photos...</div>
          )}
        </>
      ) : !loading ? (
        <p className="text-2xl text-gray-600">No photos found</p>
      ) : (
        <GallerySkeleton />
      )}
      <div id="visor" ref={externalRef} />
    </div>
  )
}

export default PhotoGallery
