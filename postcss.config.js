const NODE_ENV = (process.env.NODE_ENV || 'development').trim();
const isProduction = NODE_ENV === 'production';

var config = {
    plugins: [
        require('autoprefixer')({
            browsers: ['last 4 versions', '> 1%', 'IE 9']
        })
    ].concat(isProduction
        ? [
            require('cssnano')({
                safe: true,
                Transforms: {
                    discardComments: {
                        removeAll: true
                    }
                }
            })
        ]
        : []
    )
};

module.exports = config;
