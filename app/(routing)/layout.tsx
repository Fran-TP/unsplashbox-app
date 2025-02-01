import Nav from '@/ui/home/nav'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-dvh flex flex-col">
      <header className="p-4 md:pl-10 md:pr-12 md:py-[1.15rem] border-b-2 border-b-light dark:border-b-gray-700 bg-lighter dark:bg-dark">
        <Nav />
      </header>
      <main className="grow bg-lighter dark:bg-dark">{children}</main>
    </div>
  )
}

export default Layout
