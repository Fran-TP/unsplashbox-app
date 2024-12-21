import Image from 'next/image'
import SearchIcon from '../ui/icons/search'

const Home = () => {
  return (
    <div className="relative h-full flex justify-center items-center overflow-x-clip">
      <Image
        src="/hero-left.webp"
        alt="hero-left"
        className="absolute my-auto hidden sm:block sm:-left-[55%] lg:-left-[50%] xl:-left-8 h-[73vh] w-auto"
        width={537}
        height={759}
      />
      <section className="flex flex-col px-6 sm:py-0 gap-3 justify-center items-center ">
        <h1 className="font-semibold text-4xl text-light/80">Search</h1>
        <p className="font-light mb-3">
          Search high-resolution images from Unsplash
        </p>
        <div className="relative flex w-full">
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
      </section>
      <Image
        src="/hero-right.webp"
        alt="hero-right"
        className="absolute m-auto hidden sm:block sm:-right-[55%]  lg:-right-[50%] xl:-right-8 h-[73vh] w-auto"
        width={537}
        height={759}
      />
    </div>
  )
}

export default Home
