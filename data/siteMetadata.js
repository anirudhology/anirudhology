// @ts-check
/** @type {import("pliny/config").PlinyConfig } */

const siteMetadata = {
    title: 'Code, Create, Conquer',
    author: 'Anirudh',
    fullName: 'Anirudh Sharma',
    headerTitle: 'Anirudhology',
    description: 'My desire to practice my skills and share my acquired knowledge fuels my endeavors.',
    language: 'en-us',
    theme: 'system',
    siteUrl: 'https://anirudhology.com',
    analyticsURL: 'https://cloud.umami.is/share/rkdATkUXEaZKwhuG/anirudhology.com',
    siteRepo: 'https://github.com/anirudhology/anirudhology.com',
    siteLogo: '/static/images/avatar.jpg',
    image: '/static/images/avatar.jpg',
    socialBanner: '',
    email: 'anirudhology@gmail.com',
    github: 'https://github.com/anirudhology',
    facebook: '',
    linkedin: 'https://www.linkedin.com/in/anirshar',
    twitter: 'https://twitter.com/anirudhology',
    youtube: 'https://youtube.com/@anirudhology',
    locale: 'en-US',
    socialAccounts: {
        github: 'anirudhology',
        linkedin: 'anirshar',
        youtube: 'anirudhology',
    },
    analytics: {
        umamiWebsiteId: '556832b6-a3f8-477d-8989-bf153a1d36de',
    },
    newsletter: {
        provider: 'buttondown',
    },
    comments: {
        provider: 'giscus',
        giscusConfig: {
            repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
            repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
            category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
            categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
            mapping: 'title',
            reactions: '1',
            metadata: '0',
            theme: 'light',
            darkTheme: 'transparent_dark',
            themeURL: '',
            lang: 'en',
            inputPosition: 'top',
        },
    },
};

module.exports = siteMetadata;
