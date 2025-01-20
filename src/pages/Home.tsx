import { Advice } from "../components/advice"
import { useQuery } from "@tanstack/react-query"

import { getAdvices } from "../api/api"

export const Home = () => {
  const {
    data: advices,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["fetchData"],
    queryFn: getAdvices
  })

  if (isLoading) return <p>loading data ...</p>
  if (isError) return <p>error</p>

  return (
    <>
      {advices?.map((advice) => (
        <Advice key={advice.id} advice={advice} />
      ))}
    </>
  )
}
