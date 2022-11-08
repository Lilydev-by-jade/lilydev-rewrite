<script lang="ts">
	export let header: String = 'Card Header';
	export let subHeader: String = 'Card Subheader';
</script>

<div class="card w-72 bg-base-100 shadow-xl image-full">
	<figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
	<div class="card-body justify-between text-center space-y-2">
		<div>
			<h1 class="text-3xl font-semibold">{header}</h1>
			<p class="text-sm">{subHeader}</p>
		</div>
		<div class="card-actions">
			<button class="btn btn-primary btn-outline btn-block btn-sm">About</button>
		</div>
	</div>
</div>
