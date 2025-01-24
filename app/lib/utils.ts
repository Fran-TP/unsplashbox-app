export const sleep = (delay: number) =>
  new Promise(resolve => setTimeout(resolve, delay))

export const formatDate = (inputDate: string, locale = navigator.language) => {
  const date = new Date(inputDate)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  const formatter = new Intl.DateTimeFormat(locale, options)

  return formatter.format(date)
}
