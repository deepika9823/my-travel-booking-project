export interface TravelPackage {
    id: number
    name: string
    image: string
    destination: string
    price: number
    duration: string
    description: string
    itinerary: string[]
  }
  
  export interface Booking {
	date: Date
	bookingNumber:string
    id: number
    bookingDate: Date
    packageId: number
    name: string
    email: string
    travelers: number
   

  }
  
  export interface SearchFilters {
    destination: string
    minPrice: number
    maxPrice: number
    duration: string
  }
  
  