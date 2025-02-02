<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';
  
	let error: Error | null = null;
  
	onMount(() => {
	  if (dev) {
		window.onerror = (message, source, lineno, colno, err) => {
		  error = err || new Error(message as string);
		};
	  }
	});
  </script>
  
  {#if error}
	<div class="error-message">
	  <h1>An error occurred</h1>
	  <p>{error.message}</p>
	  {#if dev}
		<pre>{error.stack}</pre>
	  {/if}
	</div>
  {:else}
	<div class="min-h-screen bg-gray-100">
	  <nav class="bg-blue-600 text-white p-4">
		<div class="container mx-auto flex justify-between items-center">
		  <a href="/" class="text-2xl font-bold">Travel Booking</a>
		  <ul class="flex space-x-4">
			
			<li><a href="/" class="hover:underline" class:underline={$page.url.pathname === '/'}>Home</a></li>
			
	  </nav>
  
	  <slot />
  
	  <footer class="bg-gray-200 p-8 mt-8">
	
		<div class="container mx-auto text-center mt-2">
		  <p>&copy; 2025 Travel Booking Site. All rights reserved.</p>
		</div>
	  </footer>
	</div>
  {/if}
  
  <style>
	.error-message {
	  padding: 20px;
	  background-color: #f8d7da;
	  color: #721c24;
	  border: 1px solid #f5c6cb;
	  border-radius: 4px;
	  margin: 20px;
	}
  </style>
  
  