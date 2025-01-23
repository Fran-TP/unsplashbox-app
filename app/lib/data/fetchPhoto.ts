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

export const fetchPhot = async (id: string): Promise<Photo> => {
  const api = await unsplash.photos.get({ photoId: id })

  return api.response
}
