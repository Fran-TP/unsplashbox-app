import InputSearch from '@/app/ui/components/input-search'
import PhotoGallery from '@/ui/collections/photo-gallery'
import { Suspense } from 'react'

const GalleryPage = () => {
  return (
    <div className="relative">
      <InputSearch />
      <div className="bg-gradient-to-r from-red-300 from-60% via-indigo-500 via-80% to-purple-600 to-95% h-16" />
      <Suspense fallback={<div>Loading...</div>}>
        <PhotoGallery />
      </Suspense>
    </div>
  )
}

export default GalleryPage
