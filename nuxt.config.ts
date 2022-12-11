export default defineNuxtConfig({
	extends: ['github:imlautaro/oxecore'],
	modules: ['@nuxtjs/supabase'],
	srcDir: 'src',
	unocss: {
		webFonts: {
			fonts: {
				sans: 'Poppins:400,600,700',
			},
		},
	},
})
