interface DetailPageProps {
  params: Promise<{ id: string }>
}

const DetailPage = async ({ params }: DetailPageProps) => {
  const { id } = await params

  return (
    <div className="container">
      <h1>Detail Page</h1>
      <p>Photo ID: {id}</p>
    </div>
  )
}

export default DetailPage
