import type { Basic } from 'unsplash-js/dist/methods/photos/types'
import { unsplash } from '../constants'
import { sleep } from '../utils'

export const fetchPhotoById = async (id: string): Promise<Basic> => {
  await sleep(3000)
  const api = await unsplash.photos.get({ photoId: id })

  if (api.errors) {
    const [error] = api.errors

    throw new Error(error)
  }

  return api.response
}
