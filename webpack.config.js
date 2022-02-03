const path = require("path");

module.exports = {
    entry: { index: path.resolve(__dirname, "resources", "js", "script.js") },
    output: {
        path: path.resolve(__dirname, "resources", "js", "build"),
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
        ],
    },
};
