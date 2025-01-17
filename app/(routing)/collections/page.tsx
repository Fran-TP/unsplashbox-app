import { fetchUnsplashPhotos } from '@/app/lib/data/fetchPhotos'
import InputSearch from '@/app/ui/components/input-search'
import { GallerySkeleton } from '@/app/ui/components/skeletons'
import PhotoGallery from '@/ui/collections/photo-gallery'
import { Suspense } from 'react'

interface SearchParams {
  query?: string
}
interface GalleryPageProps {
  searchParams: Promise<SearchParams>
}

const GalleryPage = async ({ searchParams }: GalleryPageProps) => {
  const { query = 'popular' } = await searchParams

  return (
    <div className="relative flex flex-col h-full">
      <div className="flex-shrink-0 bg-gradient-to-r from-red-300 from-60% via-indigo-500 via-80% to-purple-600 to-95% h-16" />
      <InputSearch />
      <Suspense key={query} fallback={<GallerySkeleton />}>
        <PhotoGallery query={query} />
      </Suspense>
    </div>
  )
}

export default GalleryPage
