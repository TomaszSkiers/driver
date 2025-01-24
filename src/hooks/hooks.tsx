import { useQuery } from "@tanstack/react-query"
import {
  getAdvices,
  getAdvicesByTags,
  getFilteredAdvcesByPhrase,
  getFilteredAdvices
} from "../api/api"
import { Advice } from "../types/types"

export const useAdvices = () => {
  return useQuery<Advice[]>({
    queryKey: ["fetchData"],
    queryFn: getAdvices
  })
}

export const useCategoryBarLink = (data: string) => {
  return useQuery<Advice[]>({
    queryKey: ["fetchData", data], // Uwzględniamy temat w kluczu
    queryFn: () => getFilteredAdvices(data),
    enabled: !!data // Zapytanie zostanie wykonane tylko, jeśli `subject` nie jest pusty
  })
}

export const useSearchByPhrase = (data: string) => {
  return useQuery<Advice[]>({
    queryKey: ["fetchData", data],
    queryFn: () => getFilteredAdvcesByPhrase(data)
  })
}

export const useSearchByTag = (tag: string) => {
  return useQuery<Advice[]>({
    queryKey: ["advices", tag],
    queryFn: () => getAdvicesByTags(tag)
  })
}
