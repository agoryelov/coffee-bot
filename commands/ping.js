module.exports = {
	name: 'ping',
	execute(message, args) {
		message.channel.send('pong :eyes:')
	},
}
