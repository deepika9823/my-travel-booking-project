import { writable } from "svelte/store"
import type { TravelPackage } from "$lib/types"

const mockPackages: TravelPackage[] = [
  {
    id: 1,
    name: "Weekend in Paris",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    destination: "Paris, France",
    price: 500,
    duration: "3 days",
    description:
      "Explore the city of lights in this romantic getaway. Visit iconic landmarks and indulge in exquisite cuisine.",
    itinerary: ["Day 1: Eiffel Tower", "Day 2: Louvre Museum", "Day 3: Notre-Dame Cathedral"],
  },
  {
    id: 2,
    name: "Tokyo Adventure",
    image:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    destination: "Tokyo, Japan",
    price: 800,
    duration: "5 days",
    description:
      "Immerse yourself in the vibrant culture of Tokyo. Experience modern technology and ancient traditions.",
    itinerary: [
      "Day 1: Shibuya Crossing",
      "Day 2: Senso-ji Temple",
      "Day 3: Tokyo Skytree",
      "Day 4: Akihabara",
      "Day 5: Meiji Shrine",
    ],
  },
  {
    id: 3,
    name: "New York City Escape",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    destination: "New York City, USA",
    price: 700,
    duration: "4 days",
    description:
      "Experience the energy of the Big Apple. From Broadway shows to world-class museums, there's something for everyone.",
    itinerary: [
      "Day 1: Times Square",
      "Day 2: Central Park",
      "Day 3: Statue of Liberty",
      "Day 4: Metropolitan Museum of Art",
    ],
  },
 
    {
      id: 4,
      name: "Rome Historical Tour",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      destination: "Rome, Italy",
      price: 650,
      duration: "5 days",
      description: "Step back in time in the Eternal City. Discover ancient ruins, magnificent art, and authentic Italian cuisine.",
      itinerary: [
        "Day 1: Colosseum & Roman Forum",
        "Day 2: Vatican Museums & Sistine Chapel",
        "Day 3: Pantheon & Trevi Fountain",
        "Day 4: Villa Borghese & Spanish Steps",
        "Day 5: Catacombs & Appian Way"
      ],
    },
    {
      id: 5,
      name: "Sydney Explorer",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      destination: "Sydney, Australia",
      price: 900,
      duration: "6 days",
      description: "Experience the best of Down Under. From iconic landmarks to beautiful beaches and unique wildlife.",
      itinerary: [
        "Day 1: Sydney Opera House & Harbour Bridge",
        "Day 2: Bondi Beach & Coastal Walk",
        "Day 3: Blue Mountains",
        "Day 4: Taronga Zoo",
        "Day 5: Manly Beach",
        "Day 6: Darling Harbour"
      ],
    },
    {
      id: 6,
      name: "Dubai Luxury Experience",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      destination: "Dubai, UAE",
      price: 1200,
      duration: "5 days",
      description: "Immerse yourself in luxury and modernity. Experience desert adventures and futuristic architecture.",
      itinerary: [
        "Day 1: Burj Khalifa & Dubai Mall",
        "Day 2: Desert Safari",
        "Day 3: Palm Jumeirah & Atlantis",
        "Day 4: Gold Souk & Dubai Creek",
        "Day 5: Dubai Marina & Burj Al Arab"
      ],
    },
    {
      id: 7,
      name: "Barcelona Cultural Tour",
      image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      destination: "Barcelona, Spain",
      price: 600,
      duration: "4 days",
      description: "Discover the artistic soul of Catalunya. From Gaudi's masterpieces to Mediterranean beaches.",
      itinerary: [
        "Day 1: Sagrada Familia & Park Güell",
        "Day 2: Gothic Quarter & Las Ramblas",
        "Day 3: Casa Batlló & Casa Milà",
        "Day 4: Barceloneta Beach & Montjuïc"
      ],
    },
    {
      id: 8,
      name: "Cape Town Adventure",
      image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      destination: "Cape Town, South Africa",
      price: 800,
      duration: "6 days",
      description: "Experience the natural beauty and rich culture of the Cape. From mountain peaks to penguin beaches.",
      itinerary: [
        "Day 1: Table Mountain",
        "Day 2: Cape Peninsula & Cape Point",
        "Day 3: Robben Island",
        "Day 4: Wine Tasting in Stellenbosch",
        "Day 5: Boulders Beach Penguins",
        "Day 6: V&A Waterfront"
      ],
    },
    {
      id: 9,
      name: "Rio Carnival Experience",
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      destination: "Rio de Janeiro, Brazil",
      price: 950,
      duration: "5 days",
      description: "Feel the rhythm of Brazil. Experience stunning beaches, iconic landmarks, and vibrant culture.",
      itinerary: [
        "Day 1: Christ the Redeemer & Corcovado",
        "Day 2: Copacabana & Ipanema Beaches",
        "Day 3: Sugarloaf Mountain",
        "Day 4: Maracanã Stadium",
        "Day 5: Santa Teresa & Lapa"
      ],
    },
    {
      id: 10,
      name: "Bangkok Explorer",
      image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      destination: "Bangkok, Thailand",
      price: 550,
      duration: "5 days",
      description: "Discover the vibrant capital of Thailand. From ancient temples to modern shopping centers.",
      itinerary: [
        "Day 1: Grand Palace & Wat Phra Kaew",
        "Day 2: Floating Markets",
        "Day 3: Wat Arun & Wat Pho",
        "Day 4: Chatuchak Weekend Market",
        "Day 5: Ayutthaya Day Trip"
      ],
    },
    {
      id: 11,
      name: "Iceland Northern Lights",
      image: "https://images.unsplash.com/photo-1520769945061-0a448c463865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      destination: "Reykjavik, Iceland",
      price: 1100,
      duration: "6 days",
      description: "Chase the Northern Lights and explore Iceland's natural wonders. From geysers to glaciers.",
      itinerary: [
        "Day 1: Reykjavik City Tour",
        "Day 2: Golden Circle",
        "Day 3: Blue Lagoon",
        "Day 4: South Coast & Waterfalls",
        "Day 5: Glacier Hike",
        "Day 6: Northern Lights Hunt"
      ],
    },
    {
      id: 12,
      name: "Greek Islands Hopping",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      destination: "Greek Islands, Greece",
      price: 850,
      duration: "7 days",
      description: "Island hop through the stunning Cyclades. Experience white-washed villages and crystal-clear waters.",
      itinerary: [
        "Day 1: Athens Acropolis",
        "Day 2-3: Santorini",
        "Day 4-5: Mykonos",
        "Day 6: Naxos",
        "Day 7: Return to Athens"
      ],
    },
    {
      id: 13,
      name: "Vietnam Heritage Tour",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      destination: "Vietnam",
      price: 700,
      duration: "8 days",
      description: "Journey through Vietnam's rich heritage. From bustling cities to peaceful rice terraces.",
      itinerary: [
        "Day 1-2: Hanoi & Old Quarter",
        "Day 3: Halong Bay Cruise",
        "Day 4-5: Hoi An Ancient Town",
        "Day 6: Mekong Delta",
        "Day 7-8: Ho Chi Minh City"
      ],
    },
  
        {
          id: 14,
          name: "Machu Picchu Explorer",
          image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          destination: "Cusco, Peru",
          price: 1000,
          duration: "7 days",
          description: "Discover the ancient Incan civilization. Trek through the Andes to the mystical Machu Picchu.",
          itinerary: [
            "Day 1-2: Cusco Acclimatization & City Tour",
            "Day 3: Sacred Valley",
            "Day 4-6: Inca Trail Trek",
            "Day 7: Machu Picchu Exploration"
          ],
        },
        {
          id: 15,
          name: "Moroccan Magic",
          image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          destination: "Morocco",
          price: 750,
          duration: "6 days",
          description: "Experience the colors and flavors of Morocco. From bustling medinas to serene deserts.",
          itinerary: [
            "Day 1-2: Marrakech & Jemaa el-Fnaa",
            "Day 3: Atlas Mountains",
            "Day 4: Sahara Desert Camel Trek",
            "Day 5: Fes Medina",
            "Day 6: Chefchaouen Blue City"
          ],
        },
        {
          id: 16,
          name: "New Zealand Adventure",
          image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          destination: "New Zealand",
          price: 1300,
          duration: "10 days",
          description: "Journey through Middle Earth. Experience stunning landscapes and adrenaline-pumping activities.",
          itinerary: [
            "Day 1-2: Auckland & Waiheke Island",
            "Day 3-4: Rotorua & Hobbiton",
            "Day 5-6: Wellington & Te Papa Museum",
            "Day 7-8: Queenstown & Milford Sound",
            "Day 9-10: Franz Josef Glacier"
          ],
        },
        {
          id: 17,
          name: "Bali Bliss",
          image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          destination: "Bali, Indonesia",
          price: 800,
          duration: "8 days",
          description: "Relax and rejuvenate in the Island of Gods. From pristine beaches to lush rice terraces.",
          itinerary: [
            "Day 1-2: Seminyak Beach & Spa",
            "Day 3: Ubud Monkey Forest & Rice Terraces",
            "Day 4: Mount Batur Sunrise Trek",
            "Day 5: Uluwatu Temple & Kecak Dance",
            "Day 6: Nusa Penida Island Tour",
            "Day 7-8: Gili Islands Snorkeling"
          ],
        },
        {
          id: 18,
          name: "Canadian Rockies Explorer",
          image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
          destination: "Alberta, Canada",
          price: 1100,
          duration: "7 days",
          description: "Discover the breathtaking beauty of the Canadian Rockies. From crystal-clear lakes to majestic peaks.",
          itinerary: [
            "Day 1: Calgary to Banff",
            "Day 2: Lake Louise & Moraine Lake",
            "Day 3: Icefields Parkway",
            "Day 4: Jasper National Park",
            "Day 5: Yoho National Park",
            "Day 6: Banff National Park",
            "Day 7: Return to Calgary"
          ],
        }
      ];
      
     
export const packages = writable<TravelPackage[]>(mockPackages);

