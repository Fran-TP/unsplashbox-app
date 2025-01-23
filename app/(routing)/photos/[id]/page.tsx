import { fetchPhotoById } from '@/app/lib/data/fetch-photo-by-id'
import Image from 'next/image'

interface DetailPageProps {
  params: Promise<{ id: string }>
}

const DetailPage = async ({ params }: DetailPageProps) => {
  const { id } = await params
  const photo = await fetchPhotoById(id)

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 xl:grid-cols-2 lg:gap-8 p-14">
      <Image
        className="rounded-lg"
        src={photo.urls.regular}
        alt={photo.description ?? 'Untitled'}
        width={photo.width}
        height={photo.height}
      />
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Image
            src={photo.user.profile_image.medium}
            alt={photo.user.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <p className="text-light/80 font-medium">{photo.user.name}</p>
        </div>
        <p>
          Published on{' '}
          <time>
            {new Date(photo.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </p>
        <div className="flex gap-4">
          <button type="button">Add to collection</button>
          <button type="button">Download</button>
        </div>
        <section className="mt-6">
          <h1 className="text-3xl text-light/80">Collection</h1>
          {/* <div className="flex gap-4"></div> */}
        </section>
      </section>
    </div>
  )
}

export default DetailPage
