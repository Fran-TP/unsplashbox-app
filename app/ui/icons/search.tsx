import type { SVGProps } from 'react'

const SearchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>search</title>
      <circle cx="11" cy="11" r="7" stroke="#E5E7EB" strokeWidth="2" />
      <path
        d="M20 20L17 17"
        stroke="#E5E7EB"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default SearchIcon
