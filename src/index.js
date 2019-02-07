const fs = require('fs-extra');
const path = require('path');


class EasySEO {
    constructor(seoParams, outputPath) {
        this.seoParams = seoParams;
    }

    getTitle() {
        return this.seoParams.title
    }

    _getPropertyMetaTag(property, content) {
        return {
            [property]: {
                content,
                property,
            },
        }
    }

    apply(compiler) {
        compiler.hooks.done.tap('webpack-easy-seo', () => {
            fs.copySync(path.resolve(this.seoParams.imagePath), path.join(this.seoParams.buildPath, this.seoParams.outputPath));
        });
    }

    getMetaTags() {

        return {
            'title': this.seoParams.title,
            'description': this.seoParams.description,
            ...this._getPropertyMetaTag("og:type", "website"),
            ...this._getPropertyMetaTag("og:url",this.seoParams.publicUrl),
            ...this._getPropertyMetaTag("og:title",this.seoParams.title),
            ...this._getPropertyMetaTag("og:description",this.seoParams.description),
            ...this._getPropertyMetaTag("og:image", this.seoParams.publicUrl + this.seoParams.outputPath),
            ...this._getPropertyMetaTag("twitter:card", "summary_large_image"),
            ...this._getPropertyMetaTag("twitter:url", this.seoParams.publicUrl),
            ...this._getPropertyMetaTag("twitter:title", this.seoParams.title),
            ...this._getPropertyMetaTag("twitter:description", this.seoParams.description),
            ...this._getPropertyMetaTag("twitter:image", this.seoParams.publicUrl + this.seoParams.outputPath),

        }
    }
}

module.exports = EasySEO;
