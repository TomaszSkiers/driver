import {
  FormControl,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button
} from "@mui/material"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { Advice, Test1Props } from "../types/types"
import { useAdvices } from "../hooks/hooks"
import { CustomLabel } from "../styles/Test.style"

export const Test1: React.FC<Test1Props> = ({ setScoreTest1 }) => {
  const { data: advices, isLoading, isError } = useAdvices()

  const [selectedValue, setSelectedValue] = useState<string>("")
  const { id } = useParams()
  const nId: number = Number(id) - 1


  //* użytkownik może wpisać nie liczbę tylko inny tekst trzeba dodać obsługę
  if (isNaN(nId))
    return <Typography> użytkownik zamiast id artykułu wpisał tekst</Typography>

  if (typeof advices === "undefined")
    return <Typography> brak danych z bazy</Typography>
  const advice: Advice = advices[nId]

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value)
  }

  const handleButtonClick = () => {
    if (selectedValue === "") {
      setScoreTest1(4)
      return
    }
    let pom = false
    advice.test.forEach((item, index) => {
      const result = item ? `option${index + 1}` : item
      if (result === selectedValue) pom = true
    })
    if (pom) setScoreTest1(2)
    else setScoreTest1(3)
  }

  if (isLoading) return <p>loading data ...</p>
  if (isError) return <p>error</p>

  return (
    <FormControl
      component="fieldset"
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 2,
        minHeight: 400,
        backgroundColor: "background.default"
      }}
    >
      <Typography variant="h4" color="text.primary" gutterBottom>
        {advice.question}
      </Typography>
      <RadioGroup
        name="grupa1"
        value={selectedValue}
        onChange={handleRadioChange}
        sx={{ ml: 3 }}
      >
        {advice.answers.map((answer, index) => (
          <FormControlLabel
            key={index}
            value={`option${index + 1}`}
            control={<Radio />}
            label={
              <CustomLabel>
                <span>
                  <strong>{index + 1}.</strong>
                </span>
                <br />
                <span>{answer}</span>
              </CustomLabel>
            }
          />
        ))}
      </RadioGroup>

      <Button
        variant="outlined"
        color="warning"
        onClick={handleButtonClick}
        sx={{ p: "10px 40px 10px 40px", mt: 2, alignSelf: "center" }}
      >
        sprawdź
      </Button>
    </FormControl>
  )
}
