import PhotoDetail from '@/app/ui/collections/detail-photo'
import { Suspense } from 'react'

const Page = () => {
  return (
    <div className="flex flex-col h-full justify-center items-center pt-14 px-14 mb-7">
      <Suspense fallback={<div className="bg-green-300">Loading...</div>}>
        <PhotoDetail />
      </Suspense>
    </div>
  )
}

export default Page
