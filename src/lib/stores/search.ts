import { writable } from "svelte/store"
import type { SearchFilters } from "$lib/types"

export const searchFilters = writable<SearchFilters>({
  destination: "",
  minPrice: 0,
  maxPrice: 5000,
  duration: "",
})

