<script>
	import ImageCard from '$lib/components/ImageCard.svelte';
</script>

<div class="hero">
	<div class="hero-content flex-col">
		<div class="max-w-xl space-y-4 md:space-y-8 text-center mb-2.5">
			<h1 class="text-5xl font-bold">Welcome to Lilydev</h1>
			<p class="text-lg">
				Lilydev is a website and "brand" created by <a href="/about/jade" class="link link-primary"
					>Jade</a
				> to host her and her friends' projects, portfolios, and pretty much anything else we decide
				to put here! If you'd like more info, click either of the cards below
			</p>
		</div>
		<div class="flex flex-row space-x-3">
			<ImageCard header="Jade" subHeader="(jadelily18)" />
			<ImageCard header="Kyle" subHeader="(Void_BLISS)" />
		</div>
	</div>
</div>
