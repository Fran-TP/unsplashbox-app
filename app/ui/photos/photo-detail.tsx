import { fetchPhotoById } from '@/app/lib/data/fetch-photo-by-id'
import { fetchUserCollections } from '@/app/lib/data/fetch-user-collections'
import { formatDate } from '@/app/lib/utils'
import { AddPhoto, DownloadPhoto } from '@/app/ui/photos/buttons'
import Image from 'next/image'
import { ErrorBoundary } from 'react-error-boundary'
import CollectionList from './collection-list'
import { Suspense } from 'react'

interface DetailPageProps {
  params: Promise<{ id: string }>
}

const PhotoDetail = async ({ params }: DetailPageProps) => {
  const { id } = await params
  const photo = await fetchPhotoById(id)
  const fetchedUserCollections = fetchUserCollections({
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
        <div className="flex gap-4 flex-wrap">
          <AddPhoto />
          <DownloadPhoto photo={photo} />
        </div>
        <section className="mt-6">
          <h2 className="text-3xl text-light/80">Collection</h2>
          <ErrorBoundary
            fallback={
              <p className="text-light/80 text-lg">⚠️ Something went wrong</p>
            }
          >
            <Suspense
              fallback={<p className="text-light/80 text-lg">Loading...</p>}
            >
              <CollectionList collectionPromises={fetchedUserCollections} />
            </Suspense>
          </ErrorBoundary>
        </section>
      </section>
    </div>
  )
}

export default PhotoDetail
