<script lang="ts">
    import { page } from '$app/stores';
    import { packages } from '$lib/stores/packages';
    import type { TravelPackage } from '$lib/types';
  
    $: packageId = parseInt($page.params.id);
    $: travelPackage = $packages.find(p => p.id === packageId) as TravelPackage;
  </script>
  
  <svelte:head>
    <title>{travelPackage.name} - Travel Booking Site</title>
  </svelte:head>
  
  <main class="container mx-auto px-4 py-8">
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={travelPackage.image || "/placeholder.svg"} alt={travelPackage.name} class="w-full h-64 object-cover" />
      <div class="p-6">
        <h1 class="text-3xl font-bold mb-4">{travelPackage.name}</h1>
        <p class="text-gray-600 mb-4">{travelPackage.destination}</p>
        <p class="text-xl font-bold mb-4">${travelPackage.price}</p>
        <p class="text-gray-800 mb-4">{travelPackage.duration}</p>
        <h2 class="text-2xl font-semibold mb-2">Description</h2>
        <p class="text-gray-800 mb-4">{travelPackage.description}</p>
        <h2 class="text-2xl font-semibold mb-2">Itinerary</h2>
        <ul class="list-disc pl-6 mb-6">
          {#each travelPackage.itinerary as day}
            <li>{day}</li>
          {/each}
        </ul>
        <a
          href="/booking/{travelPackage.id}"
          class="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Book Now
        </a>
      </div>
    </div>
  </main>
  
  