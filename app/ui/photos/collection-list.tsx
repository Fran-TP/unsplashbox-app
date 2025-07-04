import { pluralize } from '@/app/lib/utils'
import Image from 'next/image'
import type { Basic } from 'unsplash-js/dist/methods/collections/types'
import PhotoIcon from '../icons/photo'

interface CollectionListProps {
  collection: Basic[]
}

const CollectionList = ({ collection }: CollectionListProps) => {
  if (!collection.length) {
    return (
      <p className="mt-4 ml-4 font-light text-dark/90 text-sm dark:text-light/80">
        No collections found
      </p>
    )
  }

  return (
    <ul className="collection__list max-h-50 snap-y space-y-2 overflow-y-auto p-3">
      {collection.map(collection => {
        const thumbnail = collection?.cover_photo?.urls.thumb

        return (
          <li
            key={collection.id}
            className="group flex cursor-pointer snap-start items-center gap-4 rounded-xl p-3 transition-colors duration-200 ease-in hover:bg-light dark:hover:bg-gray-800"
          >
            <div className="overflow-hidden rounded-md">
              {thumbnail ? (
                <Image
                  src={thumbnail}
                  alt={collection.title}
                  width={70}
                  height={70}
                  className="aspect-square object-cover transition-transform duration-200 ease-in group-hover:scale-125"
                />
              ) : (
                <PhotoIcon className="aspect-square size-14 stroke-1 object-cover text-dark/80 transition-transform duration-200 ease-in group-hover:scale-125 dark:text-light/70" />
              )}
            </div>
            <p className="flex flex-col gap-2 text-balance font-medium text-dark/90 text-xs md:text-base dark:text-light/80">
              {collection.title}
              <span className="font-light text-xs">
                {collection.total_photos} {pluralize(collection.total_photos, 'photo', 'photos')}
              </span>
            </p>
          </li>
        )
      })}
    </ul>
  )
}

export default CollectionList
