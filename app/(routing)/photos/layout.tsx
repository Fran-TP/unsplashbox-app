interface PhotoLayoutProps {
  photo: React.ReactNode
  children: React.ReactNode
}

const PhotoLayout = ({ children, photo }: PhotoLayoutProps) => {
  return (
    <>
      {photo}
      {children}
    </>
  )
}

export default PhotoLayout
