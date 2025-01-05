import Image from 'next/image'
import SearchIcon from '../ui/icons/search'
import InputSearch from '../ui/components/input-search'

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
        <InputSearch className="relative w-full" />
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
