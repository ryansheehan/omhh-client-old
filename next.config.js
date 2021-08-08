const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('./tailwind.config');

const fullConfig = resolveConfig(tailwindConfig);
const screens = fullConfig.theme.screens
const deviceSizes = Object.values(fullConfig.theme.screens)
    .map(size => parseInt(size, 10))
    .sort((a, b) => a - b);


module.exports = {
    reactStrictMode: true,
    images: {
        deviceSizes,
        domains: ['127.0.0.1']
    },
    publicRuntimeConfig: {
        thumbnailSizes: [
            `(min-width: ${screens['lg']}) 400px, (min-width: ${screens['md']}) 300px, 200px`
        ],
    }
}