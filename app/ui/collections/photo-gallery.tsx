import { fetchUnsplashPhotos } from '@/app/lib/data/fetchPhotos'
import PhotoCard from './photo-card'
import clsx from 'clsx'

interface PhotoGalleryProps {
  searchParams: Promise<{ query?: string }>
}

const PhotoGallery = async ({ searchParams }: PhotoGalleryProps) => {
  const { query = 'cats' } = await searchParams

  const { results: photoCollection } = await fetchUnsplashPhotos({
    query,
    perPage: 15,
    page: 1,
    orderBy: 'relevant'
  })

  console.log(photoCollection)

  return (
    <section
      className={clsx('p-14', {
        'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-x-7':
          photoCollection.length > 0,
        'grid place-items-center h-[80vh]': photoCollection.length === 0
      })}
    >
      {photoCollection.length > 0 ? (
        photoCollection.map(image => (
          <PhotoCard
            key={image.id}
            urls={image.urls}
            altDescription={image.alt_description ?? 'Unsplash Image'}
            width={image.width}
            height={image.height}
          />
        ))
      ) : (
        <p className="text-center text-lg text-light/80">No photos found</p>
      )}
    </section>
  )
}

export default PhotoGallery
