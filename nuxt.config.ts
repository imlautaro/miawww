export default defineNuxtConfig({
	extends: ['github:imlautaro/oxecore'],
	srcDir: 'src',
	unocss: {
		webFonts: {
			fonts: {
				sans: 'Poppins:400,600,700',
			},
		},
	},
})
