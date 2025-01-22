import { Box, Button, TextField, Typography } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { useQuery } from "@tanstack/react-query"
import { getFilteredAdvcesByPhrase } from "../api/api"
import { useEffect, useState } from "react"
import { ChildComponentProps, Advice as AdviceType } from "../types/types"
import { isLoading as loading, isError as myError  } from "../sharedFunctions/functions"

export const SearchByPhrase: React.FC<ChildComponentProps> = ({
  setParams
}) => {
  const [phrase, setPhrase] = useState<string>("")
  const [putPhrase, setPutPhrase] = useState<string>("")

  const {
    data: advices,
    isLoading,
    isError
  } = useQuery<AdviceType[]>({
    queryKey: ["fetchData", putPhrase],
    queryFn: () => getFilteredAdvcesByPhrase(putPhrase)
  })

  // Funkcja obsługująca zmianę wartości w TextField
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhrase(event.target.value)
  }

  // Funkcja obsługująca kliknięcie przycisku
  const handleSetPhrase = () => {
    console.log("Wyszukiwana fraza:", phrase)
    setPutPhrase(phrase)
  }

  //* debugger
  useEffect(() => {
    console.log(phrase)
    console.log(advices)
  }, [phrase, advices])

  useEffect(() => {
    setParams((prev) => ({
      ...prev,
      data: advices || [], // Jeśli brak danych, ustaw pustą tablicę
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
        <TextField
          fullWidth
          value={phrase}
          onChange={handleInputChange} // Obsługuje wpisywanie w polu tekstowym
        />
        <Button onClick={handleSetPhrase}>
          <SearchIcon />
        </Button>
      </Box>
    </Box>
  )
}
