import { pluralize } from '@/app/lib/utils'
import Image from 'next/image'
import type { Basic } from 'unsplash-js/dist/methods/collections/types'
import PhotoIcon from '../icons/photo'

interface CollectionListProps {
  collectionPromises: Promise<Basic[]>
}

const CollectionList = async ({ collectionPromises }: CollectionListProps) => {
  const collections = await collectionPromises

  if (!collections.length) {
    return (
      <p className="text-dark/90 dark:text-light/80 text-sm font-light mt-4 ml-4">
        No collections found
      </p>
    )
  }

  return (
    <ul className="p-3 space-y-2 max-h-96 overflow-y-auto snap-y collection__list">
      {collections.map(collection => {
        const thumbnail = collection?.cover_photo?.urls.thumb

        return (
          <li
            key={collection.id}
            className="group flex items-center gap-4 snap-start hover:bg-light dark:hover:bg-gray-800 p-3 rounded-xl cursor-pointer transition-colors duration-200 ease-in"
          >
            <div className="rounded-md overflow-hidden">
              {thumbnail ? (
                <Image
                  src={thumbnail}
                  alt={collection.title}
                  width={70}
                  height={70}
                  className="group-hover:scale-125 aspect-square object-cover transition-transform duration-200 ease-in"
                />
              ) : (
                <PhotoIcon className="group-hover:scale-125 size-14 stroke-1 text-dark/80 dark:text-light/70 aspect-square object-cover transition-transform duration-200 ease-in" />
              )}
            </div>
            <p className="text-dark/90 dark:text-light/80 font-medium flex flex-col gap-2 text-balance text-xs md:text-base">
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
  )
}

export default CollectionList
