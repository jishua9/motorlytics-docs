// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://docs.motorlytics.com.au',
	integrations: [
		starlight({
			title: 'Motorlytics Docs',
			description: 'Guides for using Motorlytics — the complete motorsport companion.',
			social: [{ icon: 'external', label: 'Motorlytics', href: 'https://app.motorlytics.com.au' }],
			sidebar: [
				{ label: 'Getting Started', items: [{ autogenerate: { directory: 'getting-started' } }] },
			],
		}),
	],
});
