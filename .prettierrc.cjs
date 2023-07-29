const config = require("@adbayb/prettier-config");

module.exports = {
    ...config,
    plugins: [require.resolve('prettier-plugin-astro')],
    overrides: [{
        files: '*.astro',
        options: {
            parser: 'astro',
        },
    }],
};