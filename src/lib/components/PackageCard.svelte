<script lang="ts">
  import type { TravelPackage } from '$lib/types';
  import { MapPin, Calendar, DollarSign } from 'lucide-svelte';

  export let travelPackage: TravelPackage;
</script>

<a href={`/package/${travelPackage.id}`} class="block group">
  <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:scale-105 group-hover:shadow-lg">
    <div class="relative">
      <img src={travelPackage.image || "/placeholder.svg"} alt="" class="w-full h-48 object-cover" />
      <div class="absolute inset-0 bg-black bg-opacity-20 transition-opacity group-hover:bg-opacity-30"></div>
    </div>
    <div class="p-4">
      <h2 class="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">{travelPackage.name}</h2>
      <div class="flex items-center text-gray-600 mb-2">
        <MapPin class="w-4 h-4 mr-1" />
        <p>{travelPackage.destination}</p>
      </div>
      <div class="flex items-center text-gray-800 font-bold mb-2">
        <DollarSign class="w-4 h-4 mr-1" />
        <p>{travelPackage.price}</p>
      </div>
      <div class="flex items-center text-gray-600">
        <Calendar class="w-4 h-4 mr-1" />
        <p>{travelPackage.duration}</p>
      </div>
    </div>
  </div>
  <span class="sr-only">View details for {travelPackage.name}</span>
</a>

