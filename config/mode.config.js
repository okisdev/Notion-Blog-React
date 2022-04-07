// Before you make changes to this document, please read https://docs.harrly.com/docs/notion-blog-react/advanced-configuration

module.exports = {
    global: {
        language: {
            default: 'en-GB',
        },
        navbar: {
            atom: {
                shown: true,
            },
            github: {
                shown: true,
            },
            email: {
                shown: false,
            },
            privacy_policy: {
                shown: true,
            },
            language: {
                shown: true,
            },
        },
        footer: {
            poweredByVercel: {
                shown: true,
            },
            themeSwitcher: {
                shown: true,
            },
        },
    },
    home: {
        header: {
            avatar: {
                shown: true,
            },
        },
        card: {
            mode: 1,
            date: {
                locale: 'en-GB',
            },
        },
    },
    posts: {
        collection: {
            shown: false,
        },
        toc: {
            shown: true,
        },
    },
};
