import { fetchPhotos } from '@/app/lib/data'
import Image from 'next/image'

const GalleryPage = async () => {
  const gallery = await fetchPhotos({ perPage: 40 })

  return (
    <div className="relative">
      <div className="bg-gradient-to-r from-red-300 from-60% via-indigo-500 via-80% to-purple-600 to-95% h-16" />
      <section className="columns-4 p-14 gap-x-7 gap-y-7">
        {gallery.map(image => {
          return (
            <article
              key={image.id}
              className="w-auto rounded-md overflow-clip mb-7"
            >
              <Image
                src={image.urls.regular}
                alt={image.alt_description}
                width={image.width}
                height={image.height}
              />
            </article>
          )
        })}
      </section>
    </div>
  )
}

export default GalleryPage
