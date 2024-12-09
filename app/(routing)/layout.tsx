import Nav from '../ui/home/nav'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="h-dvh flex flex-col md:overflow-hidden">
      <header className="p-4 md:pl-10 md:pr-12 md:py-[1.15rem] border-b border-b-light/80 dark:border-b-gray-700">
        <Nav />
      </header>
      <main className="flex-grow  md:overflow-y-auto">{children}</main>
    </div>
  )
}

export default Layout
