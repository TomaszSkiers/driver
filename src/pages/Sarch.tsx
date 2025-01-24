import { styled } from "@mui/material/styles"
import { Box, Typography } from "@mui/material"
import { Advice } from "../components/Advice"
import { SearchByCategory } from "../components/SearchByCategory"
import { useEffect, useState } from "react"
import { ParamsSearchByCategory } from "../types/types"
import { SearchByPhrase } from "../components/SearchByPhrase"

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
    isError: false
  })

  //*debugger
  useEffect(() => {
    console.log(params.data)
    console.log(params.isLoading)
    console.log(params.isError)
  }, [params.data, params.isLoading, params.isError])

  return (
    <CustomBox>
      <Box sx={{ display: "flex", gap: 5 }}>
        <SearchByCategory setParams={setParams} />

        <SearchByPhrase setParams={setParams} />
      </Box>

      {/* Sekcja wyników */}
      {params.data?.length ? (
        <div style={{ marginTop: "20px" }}>
          {params.data.map((advice) => (
            <Advice key={advice.id} advice={advice} />
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
