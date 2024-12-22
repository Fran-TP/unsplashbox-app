import { fetchUnsplashPhotos } from '@/app/lib/data/fetchPhotos'
import Image from 'next/image'
import { OrderBy } from 'unsplash-js'

const PhotoGallery = async () => {
  const gallery = await fetchUnsplashPhotos({
    perPage: 20,
    page: 1,
    orderBy: OrderBy.DOWNLOADS
  })

  return (
    <section className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 p-14 gap-x-7">
      {gallery?.results.map(image => {
        return (
          <article
            key={image.id}
            className="w-auto rounded-md overflow-clip mb-7"
          >
            <Image
              src={image.urls.small}
              alt={image.alt_description ?? 'Unsplash Image'}
              width={image.width}
              height={image.height}
            />
          </article>
        )
      })}
    </section>
  )
}

export default PhotoGallery
