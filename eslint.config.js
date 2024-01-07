import antfu from '@antfu/eslint-config'

export default antfu({
	typescript: true,
	vue: true,
	rules: {
		'no-tabs': 'off',
	},
	stylistic: {
		indent: 'tab',
		quotes: 'single',
	},
})
