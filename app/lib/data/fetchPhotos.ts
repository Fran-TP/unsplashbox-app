'use server'

import { env } from '@/env'
import { createApi, type SearchOrderBy } from 'unsplash-js'
import type { Basic } from 'unsplash-js/dist/methods/photos/types'
import { sleep } from '../utils'

const unsplash = createApi({ accessKey: env.UNSPLASH_API_ACCESS_KEY })

interface PhotoParams {
  query: string
  page?: number
  perPage?: number
  orderBy?: SearchOrderBy
}

interface PhotoListResponse {
  results: Basic[]
  total: number
}

export const fetchUnsplashPhotos = async ({
  page = 1,
  perPage = 10,
  query,
  orderBy = 'latest'
}: PhotoParams) => {
  const { promise, reject, resolve } =
    Promise.withResolvers<PhotoListResponse>()

  unsplash.search.getPhotos({ query, page, perPage, orderBy }).then(result => {
    if (result.errors) {
      reject(result.errors)
    } else {
      resolve(result.response)
    }
  })

  return promise
}
