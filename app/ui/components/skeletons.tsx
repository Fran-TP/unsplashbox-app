import clsx from 'clsx'
import PhotoIcon from '../icons/photo'

interface PhotoSkeletonProps {
  displayAspect: 'square' | 'video'
}

export const PhotoSkeleton = ({ displayAspect }: PhotoSkeletonProps) => {
  return (
    <div
      className={clsx(
        'relative shimmer before:animate-shimmer overflow-hidden w-full rounded-md mb-7 border-2 border-light bg-lighter dark:border-gray-700 dark:bg-gray-800 grid place-items-center break-inside-avoid',
        { 'aspect-square': displayAspect === 'square' },
        { 'aspect-video': displayAspect === 'video' }
      )}
    >
      <PhotoIcon className="size-20 text-light dark:text-gray-700 stroke-1" />
    </div>
  )
}

export const GallerySkeleton = () => (
  <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-x-7 w-full">
    {Array.from({ length: 18 }).map((_, i) => {
      const key = `skeleton-${i}`
      const displayAspect = i % 3 === 0 ? 'video' : 'square'

      return <PhotoSkeleton key={key} displayAspect={displayAspect} />
    })}
  </div>
)

export const CollectionSkeleton = ({
  rows: skeletonRows = 5
}: { rows?: number }) => {
  return (
    <div className="p-3">
      {Array.from({ length: skeletonRows }).map((_, i) => {
        const key = `skeleton-${i}`

        return (
          <li
            key={key}
            className="group relative shimmer before:animate-shimmer overflow-hidden flex items-center gap-4 snap-start hover:bg-gray-800 p-3 rounded-xl transition-colors duration-200 ease-in"
          >
            <PhotoIcon className="size-16 stroke-1 dark:text-gray-600" />
            <div className="flex flex-col gap-2 w-full">
              <div className="w-full h-3 bg-gray-600 rounded-lg" />
              <div className="w-14 h-2 bg-gray-600 rounded-lg" />
            </div>
          </li>
        )
      })}
    </div>
  )
}
