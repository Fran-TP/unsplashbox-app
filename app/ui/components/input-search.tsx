import SearchIcon from '@/ui/icons/search'

const InputSearch = () => {
  return (
    <div className="absolute -top-5 left-0 right-0 z-10 w-fit mt-14 mx-auto">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search"
        type="text"
        placeholder="Enter your keywords..."
        autoComplete="off"
        className="peer border bg-gray-800 outline-none w-[22rem] sm:w-[30rem] lg:w-[35rem] xl:w-[39.5rem] border-gray-700 rounded-lg py-4 pl-4 pr-10 placeholder:text-gray-500 focus:text-light/80"
      />
      <SearchIcon className="absolute text-balance top-1/2 right-5 -translate-y-1/2 size-7 text-gray-700 peer-focus:text-light/80 transition-colors duration-150 ease-in" />
    </div>
  )
}

export default InputSearch
