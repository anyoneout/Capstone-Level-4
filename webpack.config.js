import Dotenv from "dotenv-webpack";


export default {
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(scss|css)/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(jpg|png|mp4)/,
                type: "asset/resource",
            },
        ],
    },
    watch: true,
    mode: "development",
    devtool: "source-map",
    plugins: [
        new Dotenv({
            systemvars: true,
        })
    ]
};
