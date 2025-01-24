import { Box, Button, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"

import {
  isLoading as loading,
  isError as myError
} from "../sharedFunctions/functions"
import {  useSearchByTag } from "../hooks/hooks"

export const CategoryBarLink = () => {

  const { category } = useParams()
  const cat: string = category ?? "" 

  const { data: advices, isLoading, isError } = useSearchByTag(cat)

  const navigate = useNavigate()

  const loadTest = (id: number) => {
    navigate(`/test/${id}`)
  }


  if (isLoading) return loading()
  if (isError) return myError()

  return (
    <Box>
      <Typography color="primary.main" variant="h6">
        Wyniki z kategorii {cat}
      </Typography>
      {/* Sekcja wyników */}
      {advices?.length ? (
        <div style={{ marginTop: "20px" }}>
          {advices.map((advice) => (
            <Box key={advice.id} sx={{ backgroundColor: "background.default" }}>
              <Typography
                variant="h6"
                color="text.primary"
                sx={{ p: 3, backgroundColor: "background.default" }}
              >
                {advice.title}
              </Typography>
              <Box
                component="img"
                sx={{
                  width: "100%",
                  objectFit: "cover",
                  boxShadow: 3
                }}
                alt="driver"
                src={`/${advice.src}`}
              />
              <Typography
                variant="body1"
                color="text.primary"
                align="justify"
                sx={{ p: 2 }}
              >
                {advice.content}
              </Typography>
              <Button
                variant="outlined"
                color="warning"
                sx={{ m: 2 }}
                onClick={() => loadTest(advice.id)}
              >
                zalicz trening
              </Button>
            </Box>
          ))}
        </div>
      ) : (
        <Typography variant="body2" sx={{ marginTop: "20px" }}>
          Brak wyników dla wybranego tematu.
        </Typography>
      )}
    </Box>
  )
}
