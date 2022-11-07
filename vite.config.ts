import { sveltekit } from '@sveltejs/kit/vite';
import svg from '@poppanator/sveltekit-svg'

const config = {
	plugins: [
		sveltekit(),
		svg({
			includePaths: ["./src/lib/assets/icons"],
			svgoOptions: {
				multipass: true,
				plugins: ["preset-default"],
			  },
		}),
	]
};

export default config;
