<script>
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>Lilydev</title>
</svelte:head>
<div class="flex flex-col justify-between md:px-20 w-screen h-screen">
	<Navbar />
	<slot />
	<Footer />
</div>
