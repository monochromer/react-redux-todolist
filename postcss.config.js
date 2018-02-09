const NODE_ENV = (process.env.NODE_ENV || 'development').trim();
const isProduction = NODE_ENV === 'production';

const plugins = {
    'autoprefixer': require('autoprefixer')(),
    'cssnano': require('cssnano')({
        safe: true,
        Transforms: {
            discardComments: {
                removeAll: true
            }
        }
    })
};

const commonPlugins = [
    plugins['autoprefixer']
];

const envPlugins = {
    'production': [
        plugins['cssnano']
    ],
    'development': []
};

var config = {
    plugins: [
        ...commonPlugins,
        ...envPlugins[NODE_ENV]
    ]
};

module.exports = config;
