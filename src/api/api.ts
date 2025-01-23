import axios from "axios"
import { Advice as AdviceType } from "../types/types"

const apipi = "http://localhost:3000/"

export const getAdvices = async (): Promise<AdviceType[]> => {
  const { data } = await axios.get(`${apipi}advices`)
  return data
}

export const getFilteredAdvices = async (
  category: string
): Promise<AdviceType[]> => {
  const { data } = await axios.get(`${apipi}advices?subject=${category}`)
  return data
}

export const getFilteredAdvcesByPhrase = async (
  phrase: string
): Promise<AdviceType[]> => {
  const { data } = await axios.get(`${apipi}advices?title_like=${phrase}`)
  return data
}

export const getAdvicesByTags = async (tag: string): Promise<AdviceType[]> => {
  const { data } = await axios.get(`${apipi}advices?tags_like=${tag}`)
  return data
}

type CallbackType = (data: string[]) => void

export const getSubjects = async (
  callback: CallbackType,
  endpoint: string
): Promise<void | []> => {
  try {
    const { data } = await axios.get<string[]>(`${apipi}${endpoint}`)
    if (typeof callback === "function") {
      callback(data)
    } else throw new Error("parametrm funkcji nie jest funkcja")
  } catch (error: unknown) {
    // Obsługa błędów z typem
    if (axios.isAxiosError(error)) {
      console.error("Błąd Axios:", error.response?.data || error.message)
    } else {
      console.error("Nieoczekiwany błąd:", error)
    }
    return []
  }
}
