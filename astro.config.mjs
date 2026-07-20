// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://docs.motorlytics.com.au',
	integrations: [
		starlight({
			title: 'Motorlytics Docs',
			description: 'Guides for using Motorlytics, the complete motorsport companion.',
			logo: {
				src: './src/assets/logo.svg',
				alt: 'Motorlytics',
			},
			favicon: '/favicon.ico',
			head: [
				{
					tag: 'link',
					attrs: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
				},
				{
					tag: 'link',
					attrs: { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
				},
				{
					tag: 'link',
					attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
				},
				{
					tag: 'meta',
					attrs: { name: 'theme-color', content: '#0d1117' },
				},
			],
			customCss: [
				'@fontsource-variable/outfit',
				'@fontsource-variable/dm-sans',
				'@fontsource-variable/jetbrains-mono',
				'./src/styles/motorlytics.css',
			],
			expressiveCode: {
				// GitHub-dark family, matching the app's surface lineage
				themes: ['github-dark', 'github-light'],
			},
			social: [{ icon: 'external', label: 'Motorlytics', href: 'https://app.motorlytics.com.au' }],
			sidebar: [
				{ label: 'Getting Started', items: [{ autogenerate: { directory: 'getting-started' } }] },
				{ label: 'Core Concepts', items: [{ autogenerate: { directory: 'concepts' } }] },
				{ label: 'Car Management', items: [{ autogenerate: { directory: 'cars' } }] },
				{ label: 'Events & Sessions', items: [{ autogenerate: { directory: 'events-sessions' } }] },
				{ label: 'Setup Sheets', items: [{ autogenerate: { directory: 'setup-sheets' } }] },
				{ label: 'Results & Timing', items: [{ autogenerate: { directory: 'results' } }] },
				{ label: 'Pit Wall', items: [{ autogenerate: { directory: 'pit-wall' } }] },
				{ label: 'Telemetry & Data Analysis', items: [{ autogenerate: { directory: 'telemetry' } }] },
				{ label: 'Teams', items: [{ autogenerate: { directory: 'teams' } }] },
				{ label: 'Subscriptions', items: [{ autogenerate: { directory: 'subscriptions' } }] },
			],
		}),
	],
});
