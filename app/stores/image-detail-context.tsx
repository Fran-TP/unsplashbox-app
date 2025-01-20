'use client'

import { createContext, useState } from 'react'

interface ImageDetail {
  id: string
  title: string
  description: string
  url: string
  height: number
  width: number
}

interface ImageDetailContextType {
  imageDetail: ImageDetail
  setImageDetail: (imageDetail: ImageDetail) => void
}

export const ImageDetailContext = createContext<ImageDetailContextType>(
  {} as ImageDetailContextType
)

export const ImageDetailProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [imageDetail, setImageDetail] = useState<ImageDetail>({
    id: '',
    title: '',
    description: '',
    url: '',
    height: 0,
    width: 0
  })

  return (
    <ImageDetailContext.Provider value={{ imageDetail, setImageDetail }}>
      {children}
    </ImageDetailContext.Provider>
  )
}
