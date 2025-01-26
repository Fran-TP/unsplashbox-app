import Modal from '@/app/ui/photos/modal'
import PhotoDetail from '@/app/ui/photos/photo-detail'
import { Suspense } from 'react'

interface DetailPageProps {
  params: Promise<{ id: string }>
}

const DetailPage = ({ params }: DetailPageProps) => {
  return (
    <>
      <Modal>
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen">
              <p className="text-2xl">Loading...</p>
            </div>
          }
        >
          <PhotoDetail params={params} path="modal" />
        </Suspense>
      </Modal>
    </>
  )
}

export default DetailPage
