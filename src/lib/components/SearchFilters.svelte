<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { packages } from '$lib/stores/packages';
    import type { TravelPackage, SearchFilters } from '$lib/types';
	import { fade } from 'svelte/transition';
  
    const dispatch = createEventDispatcher<{search: TravelPackage[]}>();
  
    let filters: SearchFilters = {
      destination: '',
      minPrice: 0,
      maxPrice: 5000,
      duration: ''
    };
  
    let error: string | null = null;
  
    function handleSubmit() {
      try {
        const filteredPackages = $packages.filter((pkg) => {
          const matchesDestination = pkg.destination.toLowerCase().includes(filters.destination.toLowerCase());
          const matchesPrice = pkg.price >= filters.minPrice && pkg.price <= filters.maxPrice;
          let matchesDuration = true;
  
          if (filters.duration) {
            const [min, max] = filters.duration.split('-').map(Number);
            const packageDuration = parseInt(pkg.duration);
            matchesDuration = packageDuration >= min && (max ? packageDuration <= max : true);
          }
  
          return matchesDestination && matchesPrice && matchesDuration;
        });
  
        dispatch('search', filteredPackages);
        error = null;
      } catch (e) {
        error = e instanceof Error ? e.message : 'An error occurred during search';
        console.error(e);
      }
    }
  
    // Initial load of all packages
    $: {
      handleSubmit();
    }
  

	function navigateToBookings(event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement; }) {
		throw new Error('Function not implemented.');
	}
</script>
  
  <form on:submit|preventDefault={handleSubmit} class="bg-white p-4 rounded-lg shadow-md mb-6">
    <div class="flex flex-wrap items-end gap-4">
      <div class="flex-grow min-w-[200px]">
        <label for="destination" class="block mb-1 text-sm">Destination</label>
        <input
          type="text"
          id="destination"
          bind:value={filters.destination}
          class="w-full p-2 border rounded text-sm"
          placeholder="Enter destination"
        />
      </div>
      <div class="w-32">
        <label for="minPrice" class="block mb-1 text-sm">Min Price</label>
        <input
          type="number"
          id="minPrice"
          bind:value={filters.minPrice}
          min="0"
          class="w-full p-2 border rounded text-sm"
        />
      </div>
      <div class="w-32">
        <label for="maxPrice" class="block mb-1 text-sm">Max Price</label>
        <input
          type="number"
          id="maxPrice"
          bind:value={filters.maxPrice}
          min="0"
          class="w-full p-2 border rounded text-sm"
        />
      </div>
      <div class="w-40">
        <label for="duration" class="block mb-1 text-sm">Duration</label>
        <select
          id="duration"
          bind:value={filters.duration}
          class="w-full p-2 border rounded text-sm"
        >
          <option value="">Any</option>
          <option value="1-3">1-3 days</option>
          <option value="4-7">4-7 days</option>
          <option value="8-14">8-14 days</option>
          <option value="15-">15+ days</option>
        </select>
      </div>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors text-sm">
        Search
      </button>
    </div>
    </form>
  