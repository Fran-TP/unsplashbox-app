'use client'

import PhotoCard from './photo-card'
import clsx from 'clsx'
import { GallerySkeleton } from '../components/skeletons'
import Masonry from 'react-layout-masonry'
import { useGallery } from '@/app/hooks/useGallery'
import { use, useCallback, useEffect, useRef } from 'react'
import { useNearScreen } from '@/app/hooks/useNearScreen'
import type { Basic } from 'unsplash-js/dist/methods/photos/types'
import { useRouter } from 'next/navigation'
import { ImageDetailContext } from '@/app/stores/image-detail-context'

interface PhotoType extends Basic {
  title: string | null
}

interface PhotoGalleryProps {
  query: string
}

const ITEMS_GAP = 28
const INTERSECTION_MARGIN = '500px'
const responsiveColumnCounts = {
  '320': 1,
  '640': 2,
  '1024': 3,
  '1280': 4
}

const PhotoGallery = ({ query }: PhotoGalleryProps) => {
  const { push } = useRouter()
  const { setImageDetail } = use(ImageDetailContext)
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

  const handlePhotoClick = (imageDetail: PhotoType) => () => {
    setImageDetail({
      id: imageDetail.id,
      title: imageDetail.title ?? 'unsplash Image',
      description: imageDetail.description ?? 'Unsplash Image',
      url: imageDetail.urls.full,
      height: imageDetail.height,
      width: imageDetail.width
    })

    push(`/collections/${imageDetail.id}/photo`)
  }

  useEffect(() => {
    if (isNearScreen) onNextPage()
  }, [isNearScreen, onNextPage])

  return (
    <div className="flex flex-col h-full justify-center items-center pt-14 px-14 mb-7">
      {photos.length > 0 ? (
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
              onClick={handlePhotoClick({
                ...image,
                title: image.alt_description
              })}
            />
          ))}
        </Masonry>
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
