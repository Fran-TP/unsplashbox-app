'use client'

import type { Basic } from 'unsplash-js/dist/methods/photos/types'
import DownloadIcon from '../icons/download'
import PlusIcon from '../icons/plus'

export const AddPhoto = () => {
  return (
    <button
      type="button"
      className="min-w-fit flex-1 flex items-center justify-center gap-2 px-6 cursor-pointer text-dark/90 dark:hover:bg-[#2563EB]/30 hover:bg-gray-300 dark:text-light/80 bg-light dark:bg-gray-800 p-2 rounded-sm transition-colors duration-200 ease-in"
    >
      <PlusIcon className="size-5" />
      Add to collection
    </button>
  )
}

export const DownloadPhoto = ({ photo }: { photo: Basic }) => {
  const handleDownload = async () => {
    const anchorTag = document.createElement('a')
    const response = await fetch(photo.urls.full)
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)

    anchorTag.href = url
    anchorTag.download = photo.alt_description
      ? photo.alt_description.split(' ').join('-')
      : photo.id
    anchorTag.click()
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="min-w-fit flex-1 flex items-center justify-center gap-2 px-6 text-dark/90 bg-light hover:bg-gray-300 dark:hover:bg-[#2563EB]/30 cursor-pointer dark:text-light/80 dark:bg-gray-800 p-2 rounded-sm transition-colors duration-200 ease-in"
    >
      <DownloadIcon className="size-5" />
      Download
    </button>
  )
}
