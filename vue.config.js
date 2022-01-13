/* eslint-disable @typescript-eslint/no-var-requires */

const config = {
    publicPath: '.',
    productionSourceMap: false,
    chainWebpack: (config) => {
        config.optimization.minimize(false);
    },
};
module.exports = config;
