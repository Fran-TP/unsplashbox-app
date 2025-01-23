import type { Basic } from 'unsplash-js/dist/methods/photos/types'
import { unsplash } from './fetchPhotos'

export interface Photo {
  id: string
  description: string | null
  urls: {
    full: string
    regular: string
    small: string
    thumb: string
  }
  user: {
    name: string
    username: string
    profile_image: {
      small: string
      medium: string
      large: string
    }
  }
}

export const fetchPhotoById = async (id: string): Promise<Basic> => {
  const api = await unsplash.photos.get({ photoId: id })

  if (api.errors) {
    const [error] = api.errors

    throw new Error(error)
  }

  return api.response
}
