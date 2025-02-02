<script lang="ts">
    import { bookings } from '$lib/stores/bookings';
    import type { Booking } from '$lib/types';
  
    let userBookings: Booking[] = [];
  
    bookings.subscribe(value => {
      userBookings = value;
    });
  </script>
  
  <div class="bg-white shadow-md rounded-lg p-6">
    <h2 class="text-2xl font-bold mb-4">Your Bookings</h2>
    {#if userBookings.length > 0}
      <ul class="space-y-4">
        {#each userBookings as booking (booking.id)}
          <li class="border-b pb-4">
            <p class="font-semibold">Booking ID: {booking.id}</p>
            <p>Package ID: {booking.packageId}</p>
            <p>Name: {booking.name}</p>
            <p>Email: {booking.email}</p>
            <p>Number of Travelers: {booking.travelers}</p>
          </li>
        {/each}
      </ul>
    {:else}
      <p>You have no bookings yet.</p>
    {/if}
  </div>
  
  