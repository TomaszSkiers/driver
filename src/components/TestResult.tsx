import { Box, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { TestResultProps } from "../types/types"


export const TestResult: React.FC<TestResultProps> = ({ score, setScoreTest1 }) => {

  return (
    <Box>
      <Typography variant="h4" sx={{ p: 5 }}>
        {score ? "odpowiedz prawidłowa" : "odpowiedz nieprawidłowa"}
      </Typography>
      {score ? (
        <Button variant="outlined" color="warning" component={Link} to="/">
          Wróć do porad
        </Button>
      ) : (
        <Box sx={{display: 'flex', gap: 3, justifyContent: 'center'}}>
          <Button variant="outlined" color="warning" component={Link} to="/">
            Wróć do porad
          </Button>
          <Button
            variant="outlined"
            color="warning"
            onClick={()=> setScoreTest1 ? setScoreTest1(1) : null}
          >
            Wróć do testów
          </Button>
        </Box>
      )}
    </Box>
  )
}
