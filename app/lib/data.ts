interface PhotoParams {
  page?: number
  perPage?: number
}

export const fetchPhotos = async ({ page = 1, perPage = 10 }: PhotoParams) => {
  const response = await fetch(
    `https://api.unsplash.com/photos?page=${page}&per_page=${perPage}`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_API_ACCESS_KEY}`
      }
    }
  )

  return response.json()
}
