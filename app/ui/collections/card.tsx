import Image from 'next/image'
import type { Basic } from 'unsplash-js/dist/methods/photos/types'

interface CardProps {
  urls: Basic['urls']
  altDescription?: string
  width: number
  height: number
  blurHash?: string
}

const Card = ({ urls, altDescription, width, height, ...rest }: CardProps) => {
  return (
    <article className="w-auto rounded-md overflow-clip mb-7">
      <Image
        src={urls?.regular}
        alt={altDescription ?? 'Unsplash Image'}
        width={width}
        height={height}
        {...rest}
      />
    </article>
  )
}

export default Card
