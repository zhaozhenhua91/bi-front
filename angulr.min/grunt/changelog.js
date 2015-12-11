<<<<<<< HEAD
module.exports = {
	release: {
		options: {
			insertType: "prepend",
			template: '## Release v<%= package.version %>:\n\n{{> features}}{{> fixes}}\n\n',
			partials: {
				features: '#### Features:\n\n{{#if features}}{{#each features}}{{> feature}}{{/each}}{{else}}{{> empty}}{{/if}}\n',
				fixes: '#### Bugfixes:\n\n{{#if fixes}}{{#each fixes}}{{> fix}}{{/each}}{{else}}{{> empty}}{{/if}}',
				empty: ' - (none)\n'
			},
			dest: "update.txt"
		}
	}
=======
module.exports = {
	release: {
		options: {
			insertType: "prepend",
			template: '## Release v<%= package.version %>:\n\n{{> features}}{{> fixes}}\n\n',
			partials: {
				features: '#### Features:\n\n{{#if features}}{{#each features}}{{> feature}}{{/each}}{{else}}{{> empty}}{{/if}}\n',
				fixes: '#### Bugfixes:\n\n{{#if fixes}}{{#each fixes}}{{> fix}}{{/each}}{{else}}{{> empty}}{{/if}}',
				empty: ' - (none)\n'
			},
			dest: "update.txt"
		}
	}
>>>>>>> f7670e88ad3798a75d6e9c8b8912206c9b113183
};