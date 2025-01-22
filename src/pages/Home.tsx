import { Advice } from "../components/Advice"
import { isLoading as loading } from "../sharedFunctions/functions"
import { isError as myError } from "../sharedFunctions/functions"
import { Box } from "@mui/material"
import { HorizontalLinksWithButtons } from "../components/CategoryBar"
import { useAdvices } from "../hooks/hooks"

export const Home = () => {

  const { data: advices, isLoading, isError } = useAdvices()

  

  if (isLoading) return loading()
  if (isError) return myError()

  return (
    <>
      {advices?.map((advice) => (
        <Box key={advice.id}>
          <Advice advice={advice} />
          <HorizontalLinksWithButtons /> {/**tagi */}
        </Box>
      ))}
    </>
  )
}
