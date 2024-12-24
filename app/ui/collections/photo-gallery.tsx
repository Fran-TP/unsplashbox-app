import { fetchUnsplashPhotos } from '@/app/lib/data/fetchPhotos'
import { OrderBy } from 'unsplash-js'
import Card from './card'

const PhotoGallery = async () => {
  const { results: photoCollection } = await fetchUnsplashPhotos({
    perPage: 20,
    page: 1,
    orderBy: OrderBy.DOWNLOADS
  })

  return (
    <section className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 p-14 gap-x-7">
      {photoCollection.map(image => (
        <Card
          key={image.id}
          urls={image.urls}
          altDescription={image.alt_description ?? 'Unsplash Image'}
          width={image.width}
          height={image.height}
        />
      ))}
    </section>
  )
}

export default PhotoGallery
