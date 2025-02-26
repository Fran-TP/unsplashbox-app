'use server'

import type { SearchOrderBy } from 'unsplash-js'
import type { Basic } from 'unsplash-js/dist/methods/photos/types'
import { unsplash } from '../constants'

interface PhotoParams {
  query: string
  page?: number
  perPage?: number
  orderBy?: SearchOrderBy
}

export interface PhotoListResponse {
  results: Basic[]
  total: number
  total_pages: number
}

export const fetchUnsplashPhotos = async ({
  page = 1,
  perPage,
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
    const [error] = result.errors

    throw new Error(error)
  }

  return result.response
}
