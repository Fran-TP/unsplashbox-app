import InputSearch from '@/app/ui/components/input-search'
import { GallerySkeleton } from '@/app/ui/components/skeletons'
import PhotoGallery from '@/ui/collections/photo-gallery'
import { Suspense } from 'react'

const GalleryPage = () => {
  return (
    <div className="relative">
      <div className="bg-gradient-to-r from-red-300 from-60% via-indigo-500 via-80% to-purple-600 to-95% h-16" />
      <InputSearch />
      <Suspense fallback={<GallerySkeleton />}>
        <PhotoGallery />
      </Suspense>
    </div>
  )
}

export default GalleryPage
