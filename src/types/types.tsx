// Definiujemy typ danych Advice

export interface Advice {
  id: number
  title: string
  content: string
  src: string
  questions: string[]
  answers: string[]
  test: boolean[]
}

export type Test1Props = {
  setScoreTest1: (score: number) => void
}

export type TestResultProps = {
  score: number
  setScoreTest1?: (score: number) => void
}



//* przykłady typowania:

// const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//   setSelectedValue(event.target.value)
// }

// const [selectedValue, setSelectedValue] = useState<string>("")
