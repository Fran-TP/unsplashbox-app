import Image from 'next/image'
import type { Basic } from 'unsplash-js/dist/methods/photos/types'

export interface CardProps {
  urls: Basic['urls']
  altDescription?: string
  width: number
  height: number
  onClick: () => void
}

const PhotoCard = ({
  urls,
  altDescription = 'Unsplash Image',
  width,
  height,
  onClick,
  ...rest
}: CardProps) => {
  return (
    <article
      className="w-auto rounded-md overflow-clip"
      onClick={onClick}
      onKeyUp={onClick}
    >
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
