import { I18nPlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(I18nPlugin, {
		defaultLanguage: "en",
		// Rename the default universal filter names
		filters: {
			// transform a URL with the current page’s locale code
			url: "locale_url",

			// find the other localized content for a specific input file
			links: "locale_links",
		},
		// When to throw errors for missing localized content files
		errorMode: "strict", // throw an error if content is missing at /en/slug
	});
	eleventyConfig.setInputDirectory('src');
	eleventyConfig.setOutputDirectory('_site');
	eleventyConfig.addPassthroughCopy("./src/_css/");
	eleventyConfig.addPassthroughCopy("./src/_fonts/");
	eleventyConfig.addPassthroughCopy("./src/_img/");
	eleventyConfig.addWatchTarget("./src/_css/");
	eleventyConfig.addWatchTarget("./src/_fonts/");
	eleventyConfig.addWatchTarget("./src/_img/");
}

export const config = {
	markdownTemplateEngine: 'njk',
	htmlTemplateEngine: 'njk',
};