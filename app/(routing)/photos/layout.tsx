interface PhotoLayoutProps {
  photo: React.ReactNode
  children: React.ReactNode
}

const PhotoLayout = ({ children, photo }: PhotoLayoutProps) => {
  return (
    <>
      <div className="relative">{photo}</div>
      {children}
    </>
  )
}

export default PhotoLayout
