import { Box, Typography } from "@mui/material"
import { Test1 } from "../components/Test-1"
import { useState } from "react"
import { TestResult } from "../components/TestResult"
import { Test2 } from "../components/Test-2"

export const Test = () => {
  const [scoreTest1, setScoreTest1] = useState<number>(1)

  //*debugger
  // console.log('jestem w Test', scoreTest1)

  const renderComponent = () => {
    if (scoreTest1 === 1)
      return <Test1 setScoreTest1={setScoreTest1} /> //wyświetl testy
    else if (scoreTest1 === 2) return <TestResult score={1} /> //test zaliczony
    else if (scoreTest1 === 3)
      return <TestResult score={2} setScoreTest1={setScoreTest1} />
    //test niezaliczony
    else if (scoreTest1 === 4)
      return <TestResult score={3} setScoreTest1={setScoreTest1} /> //nie wybrano odpowiedzi
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box>
        <Typography
          sx={{ p: 4, backgroundColor: "darkcyan", fontSize: "1.2rem" }}
        >
          <strong>TRENING</strong> <br />
          odpowiedz na pytania poniżej jedana z odpowiedzi jest prawidłowa
        </Typography>
      </Box>

      {renderComponent()}

      <Test2 />
    </Box>
  )
}
