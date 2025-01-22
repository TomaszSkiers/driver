import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import React, { useEffect } from "react"
import { getFilteredAdvices } from "../api/api"
import { Advice as AdviceType, ChildComponentProps } from "../types/types"
import { isLoading as loading, isError as myError  } from "../sharedFunctions/functions"

export const SearchByCategory: React.FC<ChildComponentProps> = ({
  setParams
}) => {
  const categories: string[] = ["bezpieczeństwo", "technika", "korki"] //w bazie zrobiłem subject???
  const [subject, setSubject] = React.useState("")

  const {
    data: advices,
    isLoading,
    isError
  } = useQuery<AdviceType[]>({
    queryKey: ["fetchData", subject], // Uwzględniamy temat w kluczu
    queryFn: () => getFilteredAdvices(subject),
    enabled: !!subject // Zapytanie zostanie wykonane tylko, jeśli `subject` nie jest pusty
  })

  useEffect(() => {
    setParams((prev) => ({
      ...prev,
      data: advices || [], // Jeśli brak danych, ustaw pustą tablicę
      isLoading,
      isError
    }))
  }, [advices, isLoading, isError, setParams])

  const handleChange = (event: SelectChangeEvent) => {
    setSubject(event.target.value as string)
  }

  if (isLoading) return loading()
  if (isError) return myError()

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="body1" sx={{ p: 4 }}>
        wyszukaj artykuły po temacie
      </Typography>
      <FormControl fullWidth sx={{ maxWidth: "300px" }}>
        <InputLabel id="demo-simple-select-label">Subject</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={subject}
          label="Subject"
          onChange={handleChange}
        >
          {categories.map((category, index) => (
            <MenuItem key={index} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
