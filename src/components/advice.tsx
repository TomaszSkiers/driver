import { Box, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { Advice as AdviceType } from "../types/types"

export const Advice = ({ advice }: { advice: AdviceType }) => {
  const navigate = useNavigate()

  const loadTest = (id: number) => {
    navigate(`/test/${id}`)
  }

  return (
    <Box>
      <Typography variant="h6" sx={{ p: 3, backgroundColor: "#111" }}>
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
        src={advice.src}
      />
      <Typography variant="body1" align="justify" sx={{ p: 2 }}>
        {advice.content}
      </Typography>
      <Button
        variant="outlined"
        color="warning"
        sx={{ m: 2 }}
        onClick={() => loadTest(advice.id)}
      >
        zalicz trening{" "}
      </Button>
    </Box>
  )
}
