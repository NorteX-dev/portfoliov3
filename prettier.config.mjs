/** @type {import("prettier").Config} */
export default {
	useTabs: true,
	tabWidth: 4,
	printWidth: 120,
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
