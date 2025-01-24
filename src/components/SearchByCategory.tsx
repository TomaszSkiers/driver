import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from "@mui/material"
import React, { useEffect, useState } from "react"
import { ChildComponentProps } from "../types/types"
import {
  isLoading as loading,
  isError as myError
} from "../sharedFunctions/functions"
import { useCategoryBarLink } from "../hooks/hooks"
import { getSubjects } from "../api/api"



export const SearchByCategory: React.FC<ChildComponentProps> = ({
  setParams
}) => {
  const [subject, setSubject] = useState("")
  const [categories, setCategories] = useState<string[]>([]) 


  //* debugger
  useEffect(()=> {
    getSubjects(setCategories, 'subjects')
  }, [])

  const { data: advices, isLoading, isError } = useCategoryBarLink(subject)

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
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 200,
              },
            },
          }}
          sx={{
            '& .MuiSelect-select': {
              overflowY: 'auto'
            }
          }}
        >
          {categories?.length > 0 
          ? 
          categories.map((category, index) => (
            <MenuItem key={index} value={category}>
              {category}
            </MenuItem>
          ))
        : null}
        </Select>
      </FormControl>
    </Box>
  )
}
