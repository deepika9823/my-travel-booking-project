import { writable } from "svelte/store"
import type { Booking } from "$lib/types"

export const bookings = writable<Booking[]>([])

