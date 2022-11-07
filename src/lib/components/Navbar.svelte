<script lang="ts">
	import LilydevLogo from '$lib/assets/lilydev_logo.png';

	// General Icons
	import ChevronDown from '$lib/assets/icons/ChevronDown.svelte';
	import Twitter from '$lib/assets/icons/brand/TwitterIcon.svelte';
	import GitHubIcon from '$lib/assets/icons/brand/GitHubIcon.svelte';
	import MastodonIcon from '$lib/assets/icons/brand/MastodonIcon.svelte';
	import DiscordIcon from '$lib/assets/icons/brand/DiscordIcon.svelte';
</script>

<div class="navbar">
	<div class="flex-1">
		<a class="btn btn-ghost normal-case text-2xl" href="/">
			<img class="logo pr-2" src={LilydevLogo} alt="rainbow lilydev logo" />
			<h1>Lilydev</h1>
		</a>
	</div>
	<div class="flex-none space-x-2">
		<a class="btn btn-ghost" href="https://docs.lilydev.com">Docs</a>
		<div class="dropdown dropdown-end">
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<label tabindex="0" class="btn btn-ghost flex place-items-center">
				<ChevronDown svgWidth="18" class="mr-1 mt-0.5" />
				<p>Socials</p>
			</label>
			<ul class="dropdown-content menu bg-neutral p-2 shadow-xl rounded-box w-52 mt-2">
				<div class="divider">Social Media</div>
				<li>
					<a href="https://github.com/jadelily18">
						<GitHubIcon svgWidth="22" />
						<p class="pb-0.5">GitHub</p>
					</a>
				</li>
				<li>
					<a href="https://discord.gg/TZAt4PA5av">
						<DiscordIcon svgWidth="22" />
						<p class="pb-0.5">Discord</p>
					</a>
				</li>
				<li>
					<a href="https://tech.lgbt/@jadee">
						<MastodonIcon svgWidth="22" />
						<p class="pb-0.5">Mastodon</p>
					</a>
				</li>
				<li>
					<a href="https://twitter.com/jadelily18">
						<Twitter svgWidth="22" />
						<p class="pb-0.5">Twitter</p>
					</a>
				</li>
				<a class="btn btn-sm btn-primary btn-outline mt-3.5" href="/social">See all</a>
			</ul>
		</div>
	</div>
</div>

<style lang="scss">
	.logo {
		width: 43px;
	}
</style>
