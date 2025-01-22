import { Box, Button, TextField, Typography } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { useEffect, useState } from "react"
import { ChildComponentProps } from "../types/types"
import {
  isLoading as loading,
  isError as myError
} from "../sharedFunctions/functions"
import { useSearchByPhrase } from "../hooks/hooks"

export const SearchByPhrase: React.FC<ChildComponentProps> = ({
  setParams
}) => {
  const [phrase, setPhrase] = useState<string>("")
  const [putPhrase, setPutPhrase] = useState<string>("")

  const { data: advices, isLoading, isError } = useSearchByPhrase(putPhrase)
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhrase(event.target.value)
  }

  const handleSetPhrase = () => {
    console.log("Wyszukiwana fraza:", phrase)
    setPutPhrase(phrase)
  }

  useEffect(() => {
    setParams((prev) => ({
      ...prev,
      data: advices || [],
      isLoading,
      isError
    }))
  }, [advices, isLoading, isError, setParams])

  if (isLoading) return loading()
  if (isError) return myError()

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="body1" sx={{ p: 4 }}>
        wyszukaj po frazie
      </Typography>
      <Box sx={{ display: "flex" }}>
        <TextField fullWidth value={phrase} onChange={handleInputChange} />
        <Button onClick={handleSetPhrase}>
          <SearchIcon />
        </Button>
      </Box>
    </Box>
  )
}
