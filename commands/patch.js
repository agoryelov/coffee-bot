const { getPatchNotes } = require('../helpers')

module.exports = {
	name: 'patch',
	execute(message, args) {
        const patch = 
            '```diff' +
            '\n' + 'Latest patch notes: ' +
            '\n' +
            '\n' + getPatchNotes() +
            '\n' + '```'

		message.channel.send(patch)
	}
}