
import { Box, Typography } from "@mui/material"
import { Test1 } from "../components/Test-1"
import { useState } from "react"
import { TestResult } from "../components/TestResult"


export const Test = () => {
const [scoreTest1, setScoreTest1] = useState<number>(1)

const renderComponent = () => {
  if (scoreTest1 === 1) return <Test1 setScoreTest1= {setScoreTest1}/>
  else if ( scoreTest1 === 2) return <TestResult score={true} />
  else if (scoreTest1 === 3) return<TestResult score={false} setScoreTest1={setScoreTest1}/>
}


  return (
    <Box 
      sx={{display: 'flex', flexDirection: 'column'}}
    >
      <Box>
        <Typography sx={{p: 4, backgroundColor: 'darkcyan', fontSize: '1.2rem'}}>
          <strong>TRENING</strong> <br/>
          odpowiedz na pytania poniżej jedana z odpowiedzi jest prawidłowa
        </Typography>
      </Box>
      
      { renderComponent()}
      
    </Box>
  ) 
  
  
}
