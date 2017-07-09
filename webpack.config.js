module.exports = {
    entry: "./src/index",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    devtool: "source-map",
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    }
};