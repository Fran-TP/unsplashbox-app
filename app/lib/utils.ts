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

export const pluralize = (count: number, singular: string, plural: string) => {
  const formatter = new Intl.PluralRules('en-US')
  const countingRules: Partial<Record<Intl.LDMLPluralRule, string>> = {
    one: singular,
    other: plural
  }
  const select = formatter.select(count)

  return countingRules[select]
}
