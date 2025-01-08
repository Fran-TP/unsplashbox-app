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

export interface PhotoListResponse {
  results: Basic[]
  total: number
}

export const fetchUnsplashPhotos = async ({
  page = 1,
  perPage = 10,
  query,
  orderBy = 'latest'
}: PhotoParams): Promise<PhotoListResponse> => {
  const result = await unsplash.search.getPhotos({
    query,
    page,
    perPage,
    orderBy
  })

  if (result.errors) {
    throw new Error(result.errors[0])
  }

  return result.response
}
