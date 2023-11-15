// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: { enabled: false },
  css: ['~/assets/style/main.scss'],
	// loading: '~/components/Preloader.vue',
	plugins: [
    // '~/plugins/loading-plugin.js',
  ],

	modules: [
    '@nuxtjs/i18n',
    '@pinia/nuxt',
  ],
	router: {
    mode: 'hash',
  },
  i18n: {
    lazy: true,
		langDir: "locales",
		strategy: "prefix_except_default",
		locales: [
			{
				code: 'en',
				name: "English",
				file: "en.json"
			},
			{
				code: 'ua',
				name: "Ukraine",
				file: "ua.json"
			}
		],
		defaultLocale: "en",
		// vueI18n: {
		// 	fallbackLocale: "en",
		// },
  },
  components: {
		"dirs": [
			{ "path": "~/components/", "global": true, pathPrefix: false, },
		],
	},

})
