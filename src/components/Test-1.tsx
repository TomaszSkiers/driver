import {
  FormControl,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button
} from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { getAdvices } from "../api/api"
import { useParams } from "react-router-dom"
import { Advice, Test1Props } from "../types/types"

export const Test1: React.FC<Test1Props> = ({ setScoreTest1 }) => {
  const {
    data: advices,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["fetchData"],
    queryFn: getAdvices
  })

  //*  debugger
  //   if (advices) console.log("lista porad z cache", advices)

  const [selectedValue, setSelectedValue] = useState<string>("")
  const { id } = useParams()
  const nId: number = Number(id) - 1

  //* debugger
  //   console.log("id pobrane z paska adresu", nId)
  //* użytkownik może wpisać nie liczbę tylko inny tekst trzeba dodać obsługę
  if (isNaN(nId))
    return <Typography> użytkownik zamiast id artykułu wpisał tekst</Typography>

  if (typeof advices === "undefined")
    return <Typography> brak danych z bazy</Typography>
  const advice: Advice = advices[nId]
  //* debugger
  //   console.log(advice)

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value)
    //* debugger
    // console.log(event.target.value)
  }

  //* debugger
  console.log('jestem w Test1' ,selectedValue)

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
    if (pom) setScoreTest1(2) //test zaliczony
    else setScoreTest1(3) //test niezaliczony
  }

  if (isLoading) return <p>loading data ...</p>
  if (isError) return <p>error</p>

  return (
    <FormControl
      component="fieldset"
      sx={{
        // border: "1px solid red",
        display: "flex",
        flexDirection: "column",
        p: 2,
        minHeight: 400
      }}
    >
      <Typography variant="h4" gutterBottom>
        {advice.questions[0]}
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
              <div
                style={{
                  textAlign: "left",
                  marginBottom: "10px",
                  fontSize: "1.2rem",
                  marginLeft: "20px"
                }}
              >
                <span>
                  <strong>{index + 1}.</strong>
                </span>
                <br />
                <span>{answer}</span>
              </div>
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
