module.exports = {
    plugins: [require('prettier-plugin-tailwindcss')],
    tailwindConfig: './tailwind.config.js',
    resolveGlobalModules: true,
    tabWidth: 4,
    printWidth: 200,
    semi: true,
    singleQuote: true,
    jsxSingleQuote: true,
    vueIndentScriptAndStyle: true,
    arrowParens: 'always',
    trailingComma: 'es5',
};
