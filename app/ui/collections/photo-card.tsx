import Image from 'next/image'
import type { Basic } from 'unsplash-js/dist/methods/photos/types'

interface CardProps {
  urls: Basic['urls']
  altDescription?: string
  width: number
  height: number
  blurHash?: string
}

const PhotoCard = ({
  urls,
  altDescription = 'Unsplash Image',
  width,
  height,
  ...rest
}: CardProps) => {
  return (
    <article className="w-auto rounded-md overflow-clip">
      <Image
        src={urls?.small}
        alt={altDescription}
        width={width}
        height={height}
        {...rest}
      />
    </article>
  )
}

export default PhotoCard
