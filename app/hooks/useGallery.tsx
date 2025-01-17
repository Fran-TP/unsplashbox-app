import { use, useCallback, useEffect, useState } from 'react'
import {
  fetchUnsplashPhotos,
  type PhotoListResponse
} from '../lib/data/fetchPhotos'

const INITIAL_PAGE = 1

export const useGallery = ({ query }: { query: string }) => {
  const [photos, setPhotos] = useState<PhotoListResponse['results']>([])
  const [latestPhotoIds, setLatestPhotoIds] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(true)
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = useState(INITIAL_PAGE)

  const handleNextPage = useCallback(() => {
    setPage(page + 1)
  }, [page])

  // biome-ignore lint: don't need to add array methods to dependencies
  useEffect(() => {
    setLoading(true)
    fetchUnsplashPhotos({ perPage: 20, query, page })
      .then(({ results, total_pages }) => {
        const distinctPhotos = results.filter(
          ({ id }) => !latestPhotoIds.has(id)
        )

        setLatestPhotoIds(new Set(results.map(photo => photo.id)))
        setPhotos(photos.concat(distinctPhotos))
        setTotalPages(total_pages)

        setLoading(false)
      })
      .catch((error: unknown) => {
        if (error instanceof Error) {
          console.error(error.message)
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }, [query, page])

  return {
    photos,
    loading,
    handleNextPage,
    totalPages,
    page
  }
}
