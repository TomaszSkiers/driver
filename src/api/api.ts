import axios from "axios"
import { Advice as AdviceType } from "../types/types"

const apipi = 'http://localhost:3000/'

export const getAdvices = async (): Promise<AdviceType[]> => {
  const { data } = await axios.get(`${apipi}advices`)
  return data
}

export const getFilteredAdvices = async (category: string): Promise<AdviceType[]> => {
  const {data} = await axios.get(`${apipi}advices?subject=${category}`)
  return data
}

export const getFilteredAdvcesByPhrase = async(phrase: string): Promise<AdviceType[]> => {
  const {data} = await axios.get(`${apipi}advices?title_like=${phrase}`)
  return data
}