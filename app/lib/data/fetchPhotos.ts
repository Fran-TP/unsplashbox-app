'use server'

import { env } from '@/env'
import { createApi, OrderBy } from 'unsplash-js'

const unsplash = createApi({ accessKey: env.UNSPLASH_API_ACCESS_KEY })

interface PhotoParams {
  page?: number
  perPage?: number
  orderBy?: OrderBy
}

export const fetchUnsplashPhotos = async ({
  page = 1,
  perPage = 10,
  orderBy = OrderBy.POPULAR
}: PhotoParams) => {
  const result = await unsplash.photos.list({
    page,
    perPage,
    orderBy
  })

  return result.response
}
