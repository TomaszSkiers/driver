import { Advice } from "../components/Advice"
import { isLoading as loading } from "../sharedFunctions/functions"
import { isError as myError } from "../sharedFunctions/functions"
import { Box } from "@mui/material"
import { HorizontalLinksWithButtons } from "../components/CategoryBar"
import { useSearchByTag } from "../hooks/hooks"
import { getSubjects } from "../api/api"
import { useEffect, useState } from "react"

export const Home = () => {

  const [params, setParams] = useState<{tag: string, tagNb: number | null}>({
    tag: '',
    tagNb: null
  })

  useEffect(() => console.log(params), [params])

  const { data: advices = [], isLoading, isError } = useSearchByTag(params.tag)

  //stan na tagi
  const [tags, setTags] = useState<string[]>([])

  // Pobieram sobie tagi do stanu
  useEffect(() => {
    getSubjects(setTags, "tags")
  }, [])

  if (isLoading) return loading()
  if (isError) return myError()

  return (
    <>
      {Array.isArray(advices) &&
        advices.map((advice) => (
          <Box key={advice.id}>
            <Advice advice={advice} />
            <HorizontalLinksWithButtons tags={tags} setTag={setParams} tagNb={params.tagNb}/>
          </Box>
        ))}
    </>
  )
}
