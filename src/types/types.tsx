// Definiujemy typ danych Advice

export interface Advice {
  id: number
  title: string
  subject: string
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

export type ParamsSearchByCategory = {
  data: Advice[]
  isLoading: boolean
  isError: boolean
}

export type SetParamsFunction = (params: ParamsSearchByCategory) => void

export type ChildComponentProps = {
  // Funkcja aktualizująca stan
  setParams: React.Dispatch<React.SetStateAction<ParamsSearchByCategory>> 
}

//* przykłady typowania:

// const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//   setSelectedValue(event.target.value)
// }

// const [selectedValue, setSelectedValue] = useState<string>("")

// const handleChange = (event: SelectChangeEvent) => {
//   setSubject(event.target.value as string)
// }
