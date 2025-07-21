import InputSearch from '@/app/ui/components/input-search'
import { GallerySkeleton } from '@/app/ui/components/skeletons'
import PhotoGallery from '@/ui/collections/photo-gallery'
import { Suspense } from 'react'

interface SearchParams {
  query?: string
}
interface SearchPageProps {
  searchParams: Promise<SearchParams>
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { query = 'popular' } = await searchParams

  return (
    <div className="relative flex h-full flex-col">
      <div className="h-16 shrink-0 bg-linear-to-r from-60% from-red-300 via-80% via-indigo-500 to-95% to-purple-600" />
      <InputSearch />
      <Suspense key={query} fallback={<GallerySkeleton />}>
        <PhotoGallery query={query} />
      </Suspense>
    </div>
  )
}

export default SearchPage
