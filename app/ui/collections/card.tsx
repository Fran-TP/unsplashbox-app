import Image from 'next/image'

interface CardProps {
  id: string
  urls: {
    regular: string
  }
  alt_description: string
  height: number
  width: number
}

const Card = (Props: CardProps) => {
  return (
    <article className="w-auto rounded-md overflow-clip mb-7">
      <Image
        src={Props.urls.regular}
        alt={Props.alt_description}
        width={Props.width}
        height={Props.height}
      />
    </article>
  )
}

export default Card
