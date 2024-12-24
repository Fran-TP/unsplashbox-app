'use server'

import { env } from '@/env'
import { createApi, OrderBy } from 'unsplash-js'
import type { Basic } from 'unsplash-js/dist/methods/photos/types'

const unsplash = createApi({ accessKey: env.UNSPLASH_API_ACCESS_KEY })

interface PhotoParams {
  page?: number
  perPage?: number
  orderBy?: OrderBy
}

interface PhotoListResponse {
  results: Basic[]
  total: number
}

export const fetchUnsplashPhotos = async ({
  page = 1,
  perPage = 10,
  orderBy = OrderBy.POPULAR
}: PhotoParams) => {
  const { promise, reject, resolve } =
    Promise.withResolvers<PhotoListResponse>()

  unsplash.photos.list({ page, perPage, orderBy }).then(result => {
    if (result.errors) {
      reject(result.errors)
    } else {
      resolve(result.response)
    }
  })

  return promise
}
