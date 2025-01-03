import clsx from 'clsx'
import PhotoIcon from '../icons/photo'

export const PhotoSkeleton = () => {
  const aspectRatio = Math.random() > 0.5 ? 'aspect-square' : 'aspect-video'

  return (
    <div
      className={clsx(
        'relative shimmer before:animate-shimmer overflow-hidden w-full rounded-md mb-7 border border-gray-700 bg-gray-800 grid place-items-center break-inside-avoid',
        aspectRatio
      )}
    >
      <PhotoIcon className="size-20 text-gray-700 stroke-1" />
    </div>
  )
}

export const GallerySkeleton = () => (
  <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-x-7 w-full p-12">
    <div className="relative shimmer before:animate-shimmer overflow-hidden w-full aspect-video rounded-md mb-7 border border-gray-700 bg-gray-800 grid place-items-center break-inside-avoid">
      <PhotoIcon className="size-20 text-gray-700 stroke-1" />
    </div>
    {Array.from({ length: 15 }).map((_, i) => {
      const key = `skeleton-${i}`

      return <PhotoSkeleton key={key} />
    })}
  </div>
)
