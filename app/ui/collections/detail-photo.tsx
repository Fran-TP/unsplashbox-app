'use client'

import { ImageDetailContext } from '@/app/stores/image-detail-context'
import clsx from 'clsx'
import Image from 'next/image'
import { use, useEffect, useRef, useState } from 'react'

const PhotoDetail = () => {
  const { imageDetail } = use(ImageDetailContext)
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <div>Loading...</div>}
      <Image
        className={clsx('rounded-md w-96')}
        src={imageDetail.url}
        alt={imageDetail.title}
        width={imageDetail.width}
        height={imageDetail.height}
        onLoad={() => setLoading(false)}
      />
    </>
  )
}

export default PhotoDetail
