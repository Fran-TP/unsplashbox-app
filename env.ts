import { z } from 'zod'

export const envSchema = z.object({
  UNSPLASH_API_ACCESS_KEY: z.string().nonempty(),
  UNSPLASH_API_SECRET_KEY: z.string().nonempty(),
  UNSPLASH_API_APP_ID: z.string().nonempty()
})

export const env = envSchema.parse(process.env)
