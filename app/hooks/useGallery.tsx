import { useEffect, useState } from 'react'
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

  useEffect(() => {
    setLoading(true)
    fetchUnsplashPhotos({ perPage: 15, query, page })
      .then(({ results, total_pages }) => {
        const distinctPhotos = results.filter(
          ({ id }) => !latestPhotoIds.has(id)
        )

        setLatestPhotoIds(new Set(results.map(photo => photo.id)))
        setPhotos(photos.concat(distinctPhotos))
        setTotalPages(total_pages)

        setLoading(false)
      })
      .catch(() => {
        console.error('Failed to fetch photos')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [query, page])

  const handleClick = () => {
    setPage(page + 1)
  }
}
