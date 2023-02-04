const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
    framework: '@storybook/vue3',
    core: {
        builder: '@storybook/builder-webpack5'
    },
    staticDirs: [
        {from: '../src/assets/fonts', to: '/fonts'},
        {from: '../src/assets/images', to: '/images'},
        '../public'
    ],
    webpackFinal: async (config, {configType}) => {
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../')
        });
        config.module.rules.push({
            resolve: {
                alias: {
                    '@': path.resolve(__dirname, '../src')
                }
            }
        });

        return config;
    }
};
