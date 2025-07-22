import { fetchPhotoById } from '@/app/lib/data/fetch-photo-by-id'
import { fetchUserCollections } from '@/app/lib/data/fetch-user-collections'
import { formatDate } from '@/app/lib/utils'
import { AddPhoto, DownloadPhoto } from '@/app/ui/photos/buttons'
import Image from 'next/image'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { CollectionSkeleton } from '../components/skeletons'
import CollectionList from './collection-list'

interface DetailPageProps {
  params: Promise<{ id: string }>
}

const PhotoDetail = async ({ params }: DetailPageProps) => {
  const { id } = await params
  const photo = await fetchPhotoById(id)
  const collection = await fetchUserCollections({
    username: photo.user.username
  })

  return (
    <div className="grid h-full grid-cols-1 gap-5 p-6 sm:grid-cols-1 md:p-6 lg:gap-10 xl:grid-cols-2">
      <div className="h-full flex items-center justify-center overflow-y-auto">
        <Image
          className="object-contain h-full"
          src={photo.urls.regular}
          alt={photo.description ?? 'Untitled'}
          width={photo.width}
          height={photo.height}
        />
      </div>
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Image
            src={photo.user.profile_image.medium}
            alt={photo.user.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <p className="font-medium text-dark/90 dark:text-light/80">
            {photo.user.name}
          </p>
        </div>
        <p className="font-light text-dark/90 text-sm dark:text-light/80">
          Published on{' '}
          <time dateTime={photo.created_at}>
            {formatDate(photo.created_at, 'en-US')}
          </time>
        </p>
        <div className="flex flex-wrap gap-4">
          <AddPhoto />
          <DownloadPhoto photo={photo} />
        </div>
        <section className="mt-6 h-40">
          <h2 className="text-3xl text-dark/90 dark:text-light/80">
            Collection
          </h2>
          <ErrorBoundary
            fallback={
              <p className="text-dark/80 text-lg dark:text-light/80">
                ⚠️ Something went wrong
              </p>
            }
          >
            <CollectionList collection={collection} />
          </ErrorBoundary>
        </section>
      </section>
    </div>
  )
}

export default PhotoDetail
