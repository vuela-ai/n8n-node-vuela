module.exports = {
	root: true,
	env: {
		node: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: ['./tsconfig.json'],
		sourceType: 'module',
		tsconfigRootDir: __dirname,
		extraFileExtensions: ['.json'],
	},
	ignorePatterns: [
		'.eslintrc.js',
		'.eslintrc.prepublish.js',
		'dist/**/*',
		'node_modules/**/*',
		'scripts/**/*',
		'**/*.json',
		'**/*.svg'
	],
	plugins: ['eslint-plugin-n8n-nodes-base'],
	extends: ['plugin:n8n-nodes-base/community'],
	rules: {
		'n8n-nodes-base/node-dirname-against-convention': 'off',
	},
};