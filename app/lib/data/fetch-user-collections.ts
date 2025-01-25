import type { OrderBy } from 'unsplash-js'
import { unsplash } from '../constants'

interface CollectionFetchCriteria {
  username: string
  orderBy?: OrderBy
  page?: number
  perPage?: number
}

export const fetchUserCollections = async ({
  username,
  orderBy,
  page,
  perPage
}: CollectionFetchCriteria) => {
  const api = await unsplash.users.getCollections({
    username,
    orderBy,
    page,
    perPage
  })

  if (api.errors) {
    const [error] = api.errors

    throw new Error(error)
  }

  return api.response.results
}
