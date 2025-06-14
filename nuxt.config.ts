import svgLoader from 'vite-svg-loader';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: 'static',
    prerender: {
      ignore: ['/__sitemap__/style.xsl']
    }
  },
  compatibilityDate: '2024-04-03',

  devtools: { enabled: false },

  vite: {
    plugins: [svgLoader()]
  },

  plugins: ['~/plugins/v-mask.client.ts'],

  typescript: {
    tsConfig: {
      compilerOptions: {
        module: 'ESNext'
      }
    }
  },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxtjs/sitemap',
    'nuxt-viewport',
    'nuxt-intersection-observer',
    'nuxt-swiper'
  ],

  sitemap: {
    xsl: false
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://prometheus-design.ru'
  },
  runtimeConfig: {
    public: {
      siteUrl:
        process.env.NUXT_PUBLIC_SITE_URL || 'https://prometheus-design.ru'
    }
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },

    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      title: 'Прометей',
      meta: [
        {
          charset: 'utf-8'
        },
        { name: 'robots', content: 'index, follow' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'description',
          content:
            'Студия интерьерного дизайна с 14-летним опытом. Полный спектр услуг: от концепции до реализации с 3D-визуализацией и надзором.'
        },
        {
          name: 'keywords',
          content:
            'Прометей студия дизайна ,дизайн интерьера, 3D визуализация, студия дизайна, интерьер под ключ, проектирование интерьера, планировка, интерьер дома, дизайнер интерьера, разработка интерьера, авторский надзор, современный интерьер, визуализация помещений, интерьер жилого дома, интерьер офиса, архитектурная визуализация'
        },

        // Open Graph
        {
          property: 'og:url',
          content: 'https://prometheus-design.ru/'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:site_name',
          content: 'Прометей'
        },
        {
          property: 'og:title',
          content:
            'Полный спектр услуг по дизайну интерьера: от концепции до реализации.'
        },
        {
          property: 'og:description',
          content:
            'Студия интерьерного дизайна с 14-летним опытом. Полный спектр услуг: от концепции до реализации с 3D-визуализацией и надзором.'
        },
        {
          property: 'og:locale',
          content: 'ru_RU'
        },
        {
          property: 'og:image',
          content: 'https://prometheus-design.ru/seo/og-image.jpg'
        },
        {
          property: 'og:image:width',
          content: '1200'
        },
        {
          property: 'og:image:height',
          content: '630'
        },

        // Twitter Card
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: 'Прометей — студия интерьерного дизайна'
        },
        {
          name: 'twitter:description',
          content:
            '14 лет опыта. Уникальные интерьеры. Концепция, визуализация, документация.'
        },
        {
          name: 'twitter:image',
          content: 'https://prometheus-design.ru/seo/og-image.jpg'
        }
      ],

      link: [
        { rel: 'icon', href: '/favicon.ico' },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest'
        }
      ]
    }
  },

  css: ['~/assets/scss/app.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
});
