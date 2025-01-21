
import { styled } from "@mui/material/styles"
import { Box, Typography } from "@mui/material"


import { Advice } from "../components/advice"

import { isLoading as loading } from "../sharedFunctions/functions"
import { isError as myError } from "../sharedFunctions/functions"
import { SearchByCategory } from "../components/SearchByCategory"
import { useState } from "react"
import { ParamsSearchByCategory } from "../types/types"

const CustomBox = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
  // border: '1px solid red'
}))


export function Search() {

const [params, setParams] = useState<ParamsSearchByCategory>({
  data: [],
  isLoading: false,
  isError: false,
})


  if (params.isLoading) loading()
  if (params.isError) myError()

  return (
    <CustomBox>
      <Box sx={{ display: "flex" , gap: 5}}>
        
        <SearchByCategory setParams={setParams} />

        <Box sx={{display: 'flex', flexDirection: 'column'}}>
          <Typography variant="body1" sx={{ p: 4 }}>
            {" "}
            wyszukaj po frazie
          </Typography>
          <></>
        </Box>
      </Box>

      {/* Sekcja wyników */}
      {params.data?.length ? (
        <div style={{ marginTop: "20px" }}>
          {params.data.map((advice) => (
            <Advice advice={advice} />
          ))}
        </div>
      ) : (
        <Typography variant="body2" sx={{ marginTop: "20px" }}>
          Brak wyników dla wybranego tematu.
        </Typography>
      )}
    </CustomBox>
  )
}
