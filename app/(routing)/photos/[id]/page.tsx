interface DetailPageProps {
  params: Promise<{ id: string }>
}

const DetailPage = async ({ params }: DetailPageProps) => {
  const { id } = await params

  return <div>{id}</div>
}

export default DetailPage
