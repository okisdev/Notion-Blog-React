const path = require('path');

module.exports = {
    i18n: {
        defaultLocale: 'en-GB',
        locales: ['en-GB', 'zh-CN'],
    },
    localePath: path.resolve('./public/locales'),
};
