import { Advice } from "../components/advice"
import { useQuery } from "@tanstack/react-query"
import { isLoading as loading } from "../sharedFunctions/functions"
import { isError as myError} from '../sharedFunctions/functions'
import { getAdvices } from "../api/api"
import { Advice as AdviceType } from "../types/types"

export const Home = () => {
  const {
    data: advices,
    isLoading,
    isError
  } = useQuery<AdviceType[]>({
    queryKey: ["fetchData"],
    queryFn: getAdvices
  })

if (isLoading) loading()
if (isError) myError()

  return (
    <>
      {advices?.map((advice) => (
        <Advice key={advice.id} advice={advice} />
      ))}
    </>
  )
}
