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
        <PhotoDetail params={params} />
      </Modal>
    </>
  )
}

export default DetailPage
