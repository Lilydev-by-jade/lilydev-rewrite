<script lang="ts">
	import { page } from '$app/stores';
</script>

<!-- <h1>MAKE THIS RESPONSIVE ON MOBILE</h1> -->
<div class="flex flex-col place-self-center w-screen">
	<div class="mockup-window border flex flex-col place-self-center w-98 bg-base-300">
		<div class="my-16 mx-12 md:mx-56 text-center">
			<h1 class="text-[6.5rem] md:text-[10rem] font-bold">{$page.status}</h1>
			<p class="text-[1.2rem] md:text-[1.5rem] font-semibold">{$page.error?.message}</p>
			<a href="/" class="btn btn-primary btn-outline md:btn-block px-8 md:p-auto btn-sm mt-8"
				>Go Home</a
			>
		</div>
	</div>
</div>
