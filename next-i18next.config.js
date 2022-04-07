const path = require('path');

import modeConfig from './config/mode.config';

module.exports = {
    i18n: {
        defaultLocale: modeConfig.global.language.default,
        locales: ['en-GB', 'zh-CN'],
    },
    localePath: path.resolve('./public/locales'),
};
