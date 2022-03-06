const { i18n } = require('./next-i18next.config');

module.exports = {
    i18n,
    images: {
        domains: ['cdn.harrly.com', 's3-us-west-2.amazonaws.com'],
    },
    reactStrictMode: true,
};
