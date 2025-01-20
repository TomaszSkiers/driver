import axios from "axios"
import { Advice as AdviceType } from "../types/types"

export const getAdvices = async (): Promise<AdviceType[]> => {
  const { data } = await axios.get(`http://localhost:3000/advices`)
  return data
}
