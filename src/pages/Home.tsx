import { Advice } from "../components/advice"
import { useQuery } from "@tanstack/react-query"
import { isLoading as loading } from "../sharedFunctions/functions"
import { isError as myError } from "../sharedFunctions/functions"
import { getAdvices } from "../api/api"
import { Advice as AdviceType } from "../types/types"
import { Box } from "@mui/material"
import { HorizontalLinksWithButtons } from "../components/CategoryBar"

export const Home = () => {
  const {
    data: advices,
    isLoading,
    isError
  } = useQuery<AdviceType[]>({
    queryKey: ["fetchData"],
    queryFn: getAdvices
  })

  if (isLoading) return loading()
  if (isError) return myError()

  return (
    <>
      {advices?.map((advice) => (
        <Box key={advice.id}>
          <Advice advice={advice} />
          <HorizontalLinksWithButtons />
        </Box>
      ))}
    </>
  )
}
