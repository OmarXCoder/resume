import pkg from './package';

export default {
    mode: 'universal',

    /*
     ** Headers of the page
     */
    head: {
        title: 'Omar Ali',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: pkg.description
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Ubuntu&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Sofia&display=swap' }
        ]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },

    /*
     ** Global CSS
     */
    css: ['@fortawesome/fontawesome-free/css/all.min.css', '@/assets/scss/main.scss'],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],

    /*
     ** Nuxt.js modules
     */
    modules: ['@nuxtjs/style-resources'],
    styleResources: {
        scss: ['@/assets/scss/_variables.scss']
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
};
