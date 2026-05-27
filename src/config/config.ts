// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	srcDark: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle:
		'KronixAlpha',
	siteDescription:
		'Kronix Alpha',
	ogImage: '/kronix alpha transparan.png',
	logo: {
		src: '/kronix alpha transparan.png',
		srcDark: '/kronix alpha transparan.png',
		alt: 'Kronix logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
