import { colors } from '@unocss/preset-mini'

export default defineNuxtConfig({
	extends: ['github:imlautaro/oxecore'],
	modules: ['@nuxtjs/supabase'],
	srcDir: 'src',
	unocss: {
		theme: {
			colors: {
				primary: colors!.blue,
				gray: colors!.slate,
			},
		},
		webFonts: {
			fonts: {
				sans: 'Poppins:400,600,700',
			},
		},
	},
})
