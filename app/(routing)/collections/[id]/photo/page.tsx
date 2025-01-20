'use client'

import { ImageDetailContext } from '@/app/stores/image-detail-context'
import { use } from 'react'
import Image from 'next/image'

const Page = () => {
  const { imageDetail } = use(ImageDetailContext)

  return (
    <Image
      className="w-96"
      src={imageDetail.url}
      alt={imageDetail.title}
      width={imageDetail.width}
      height={imageDetail.height}
    />
  )
}

export default Page
