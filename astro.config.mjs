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
