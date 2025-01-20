import { Box, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { TestResultProps } from "../types/types"

export const TestResult: React.FC<TestResultProps> = ({
  score,
  setScoreTest1
}) => {

//*debugger
// console.log('jestem w TestResoult', score)

  const showProperInfo = () => {
    if (score === 1) {
      return (
        <Button variant="outlined" color="warning" component={Link} to="/">
          Wróć do porad
        </Button>
      )
    } else if (score === 2) {
      return (
        <Box sx={{ display: "flex", gap: 3, justifyContent: "center" }}>
          <Button variant="outlined" color="warning" component={Link} to="/">
            Wróć do porad
          </Button>
          <Button
            variant="outlined"
            color="warning"
            onClick={() => (setScoreTest1 ? setScoreTest1(1) : null)}
          >
            Wróć do testów
          </Button>
        </Box>
      )
    } else if (score === 3) {
      return (
        <Button
          variant="outlined"
          color="warning"
          onClick={() => (setScoreTest1 ? setScoreTest1(1) : null)}
        >
          Wróć do testów
        </Button>
      )
    }
  }

  return (
    <Box color="text.primary" sx={{ minHeight: 400, backgroundColor: "background.default" }}>
      <Typography variant="h4" sx={{ p: 5 }}>
        {score === 1 ? "odpowiedz prawidłowa" : score === 3 ? 'nie zaznaczono pytania' : 'odpowiedz błędna'}
      </Typography>
      {showProperInfo()}

    </Box>
  )
}
//score 1 test zaliczony
//score 2 test niezaliczony
//scoer 3 nie wybrano odpowiedzi
