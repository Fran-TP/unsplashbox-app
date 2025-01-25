'use client'

import type { Basic } from 'unsplash-js/dist/methods/photos/types'
import DownloadIcon from '../icons/download'
import PlusIcon from '../icons/plus'

export const AddPhoto = () => {
  return (
    <button
      type="button"
      className="flex items-center justify-between gap-2 px-6 text-light/80 dark:bg-gray-800 p-2 rounded transition-colors duration-200 ease-in"
    >
      <PlusIcon className="size-5" /> Add to collection
    </button>
  )
}

export const DownloadPhoto = ({ photo }: { photo: Basic }) => {
  const handleDownload = async () => {
    const a = document.createElement('a')
    const response = await fetch(photo.urls.full)
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)

    a.href = url
    a.download = photo.alt_description
      ? photo.alt_description.split(' ').join('-')
      : photo.id
    a.click()
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="flex items-center justify-between gap-2 px-6 text-light/80 dark:bg-gray-800 p-2 rounded transition-colors duration-200 ease-in"
    >
      <DownloadIcon className="size-5" /> Download
    </button>
  )
}
