<script lang="ts">
    import { page } from '$app/stores';
    import { packages } from '$lib/stores/packages';
    import { bookings } from '$lib/stores/bookings';
    import type { TravelPackage } from '$lib/types';
    import { get } from 'svelte/store';  // For accessing store value
	import { MapPin, DollarSign, Calendar } from 'lucide-svelte';

    // Get the package ID from URL parameter
    const packageId = parseInt($page.params.id);

    // Fetch the travel package from the store
    let travelPackage: TravelPackage | undefined = $packages.find(p => p.id === packageId);

    // Log for debugging
    if (!travelPackage) {
        console.error("Package not found for ID:", packageId);
    }
      
    let name = '';
    let email = '';
    let travelers = 1;

    // Handle booking form submission
    function handleSubmit() {
        if (!travelPackage) {
            alert("Package not found!");
            return;
        }

        const newBooking = {
    id: $bookings.length + 1,  // Add to bookings with a new ID
    packageId: travelPackage.id,
    name,
    email,
    bookingDate: new Date(),
    bookingNumber: '',  // You can generate or leave it empty
    travelers
};

// Add new booking to the store
bookings.update((b) => [...b, newBooking]);

        // Reset form values
        name = '';
        email = '';
        travelers = 1;

        alert('Booking successful!');
    }
</script>

<svelte:head>
    <title>{travelPackage ? travelPackage.name : 'Package Not Found'} - Travel Booking Site</title>
</svelte:head>

<main class="container mx-auto px-4 py-8">
    {#if travelPackage}
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={travelPackage.image || "/placeholder.svg"} alt={travelPackage.name} class="w-full h-64 object-cover" />
            <div class="p-6">
                <h1 class="text-3xl font-bold mb-4">{travelPackage.name}</h1>
                <div class="flex items-center text-gray-600 mb-4">
                    <MapPin class="w-5 h-5 mr-2" />
                    <p>{travelPackage.destination}</p>
                </div>
                <div class="flex items-center text-gray-800 font-bold mb-4">
                    <DollarSign class="w-5 h-5 mr-2" />
                    <p class="text-xl">${travelPackage.price}</p>
                </div>
                <div class="flex items-center text-gray-600 mb-4">
                    <Calendar class="w-5 h-5 mr-2" />
                    <p>{travelPackage.duration}</p>
                </div>
                <h2 class="text-2xl font-semibold mb-2">Description</h2>
                <p class="text-gray-800 mb-4">{travelPackage.description}</p>
                <h2 class="text-2xl font-semibold mb-2">Itinerary</h2>
                <ul class="list-disc pl-6 mb-6">
                    {#each travelPackage.itinerary as day}
                        <li>{day}</li>
                    {/each}
                </ul>
                <form on:submit|preventDefault={handleSubmit} class="bg-white rounded-lg shadow-md p-6">
                    <div class="mb-4">
                        <label for="name" class="block mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            bind:value={name}
                            required
                            class="w-full p-2 border rounded"
                        />
                    </div>
                    <div class="mb-4">
                        <label for="email" class="block mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            bind:value={email}
                            required
                            class="w-full p-2 border rounded"
                        />
                    </div>
                    <div class="mb-4">
                        <label for="travelers" class="block mb-1">Number of Travelers</label>
                        <input
                            type="number"
                            id="travelers"
                            bind:value={travelers}
                            min="1"
                            required
                            class="w-full p-2 border rounded"
                        />
                    </div>
                    <div class="mb-4">
                        <p class="font-bold">Total Price: ${travelPackage.price * travelers}</p>
                    </div>
                    <button type="submit" class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                        Confirm Booking
                    </button>
                </form>
            </div>
        </div>
    {:else}
        <p class="text-center text-gray-600 mt-8">Package not found.</p>
    {/if}
</main>