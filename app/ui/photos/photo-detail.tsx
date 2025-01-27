import { fetchPhotoById } from '@/app/lib/data/fetch-photo-by-id'
import { fetchUserCollections } from '@/app/lib/data/fetch-user-collections'
import { formatDate, pluralize } from '@/app/lib/utils'
import { AddPhoto, DownloadPhoto } from '@/app/ui/photos/buttons'
import Image from 'next/image'

interface DetailPageProps {
  params: Promise<{ id: string }>
}

const PhotoDetail = async ({ params }: DetailPageProps) => {
  const { id } = await params
  const photo = await fetchPhotoById(id)
  const collections = await fetchUserCollections({
    username: photo.user.username
  })

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 xl:grid-cols-2 lg:gap-10 p-14">
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
        <p className="text-light/80 font-light text-sm">
          Published on{' '}
          <time dateTime={photo.created_at}>
            {formatDate(photo.created_at, 'en-US')}
          </time>
        </p>
        <div className="flex gap-4">
          <AddPhoto />
          <DownloadPhoto photo={photo} />
        </div>
        <section className="mt-6">
          <h2 className="text-3xl text-light/80">Collection</h2>
          <ul className="p-3 space-y-2 max-h-96 overflow-y-auto snap-y collection__list">
            {collections.map(collection => {
              const thumbnail =
                collection?.cover_photo?.urls.thumb ?? '/file.svg'

              return (
                <li
                  key={collection.id}
                  className="group flex items-center gap-4 snap-start hover:bg-gray-800 p-3 rounded-xl cursor-pointer transition-colors duration-200 ease-in"
                >
                  <div className="rounded-md overflow-hidden">
                    <Image
                      src={thumbnail}
                      alt={collection.title}
                      width={70}
                      height={70}
                      className="group-hover:scale-125 aspect-square object-cover transition-transform duration-200 ease-in"
                    />
                  </div>
                  <p className="text-light/80 font-medium flex flex-col gap-2">
                    {collection.title}
                    <span className="font-light text-xs">
                      {collection.total_photos}{' '}
                      {pluralize(collection.total_photos, 'photo', 'photos')}
                    </span>
                  </p>
                </li>
              )
            })}
          </ul>
        </section>
      </section>
    </div>
  )
}

export default PhotoDetail
