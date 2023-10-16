// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/style/main.scss'],
	// loading: '~/components/Preloader.vue',
	plugins: [
    // '~/plugins/loading-plugin.js',
  ],
  components: {
		"dirs": [
			{ "path": "~/components/", "global": true, pathPrefix: false, },
		],
	},

})
