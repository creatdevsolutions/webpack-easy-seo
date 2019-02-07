# Webpack Easy SEO

## Installation

`npm install --save-dev webpack-easy-seo`

## Usage

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EasySeo = require('webpack-easy-seo');

const seoInst = new EasySeo({
    // Application Title, which is shown in the tab bar.
    title: "Your Title",
    // Application Description, which is shown in search engines and OpenGraph.
    description: "Your description",
    // Your public url, which is used to create the correct links to your images.
    publicUrl: "https://myapp.mydomain.com",
    // Your thumbnail image, which is used in OpenGraph
    imagePath: "./picture/logo.png",
    // Your webpack build folder
    buildPath: "./build",
    // Path in your build folder to your image.
    outputPath: "/assets/images/thumbnail.png"
});

module.exports = (mode) => {

    return {
        ...,
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html",
                // Title
                title: seoInst.getTitle(),
                // Meta Tags 
                meta: seoInst.getMetaTags(),
            }),
            // seoInst as webpack plugin to create the thumbnail file after compilation.
            seoInst,
        ],
    }
};

```
