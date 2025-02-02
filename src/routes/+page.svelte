<script lang="ts">
    import SearchFilters from '$lib/components/SearchFilters.svelte';
    import PackageCard from '$lib/components/PackageCard.svelte';
    import BookingList from '$lib/components/BookingsList.svelte';
    import type { TravelPackage } from '$lib/types';
  
    let filteredPackages: TravelPackage[] = [];
  
    function handleSearch(event: CustomEvent<TravelPackage[]>) {
      filteredPackages = event.detail;
    }
  </script>
  
  <svelte:head>
    <title>Travel Booking Site</title>
  </svelte:head>
  
  <main class="container mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold">Find Your Perfect Trip</h1>
        <a href="/bookings" class="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700">
          My Bookings
        </a>
      </div>
      
      

    <SearchFilters on:search={handleSearch} />
  
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {#if filteredPackages.length > 0}
          {#each filteredPackages as travelPackage (travelPackage.id)}
            <PackageCard {travelPackage} />
          {/each}
        {:else}
          <p class="text-center text-gray-600 col-span-3">
            No packages found matching your criteria.
          </p>
        {/if}
      </div>
      
  
  </main>