import { fetchPhotoById } from '@/app/lib/data/fetchPhoto'
import Image from 'next/image'

interface DetailPageProps {
  params: Promise<{ id: string }>
}

const DetailPage = async ({ params }: DetailPageProps) => {
  const { id } = await params
  const photo = await fetchPhotoById(id)

  return (
    <div className="container">
      <h1>Detail Page</h1>
      <p>Photo ID: {id}</p>
      <div>
        <Image
          src={photo.urls.regular}
          alt={photo.description ?? 'Untitled'}
          width={photo.width}
          height={photo.height}
        />
      </div>
    </div>
  )
}

export default DetailPage
