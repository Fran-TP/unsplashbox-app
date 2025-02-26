import PhotoDetail from '@/app/ui/photos/photo-detail'

interface DetailPageProps {
  params: Promise<{ id: string }>
}

const DetailPage = ({ params }: DetailPageProps) => {
  return <PhotoDetail params={params} />
}

export default DetailPage
