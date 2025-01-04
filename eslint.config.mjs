import js from '@eslint/js';
import prettierRecommend from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config([
	js.configs.recommended,
	importPlugin.flatConfigs.recommended,
	tseslint.configs.recommended,
	prettierRecommend,
	{
		ignores: ['dist/**'],
		rules: {
			'import/no-named-as-default-member': 'off',
		},
		settings: {
			node: {
				extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx'],
			},
			'import/parsers': {
				'@typescript-eslint/parser': ['.ts', '.tsx'],
			},
			'import/resolver': {
				// You will also need to install and configure the TypeScript resolver
				// See also https://github.com/import-js/eslint-import-resolver-typescript#configuration
				typescript: true,
				node: true,
			},
		},
	},
]);
