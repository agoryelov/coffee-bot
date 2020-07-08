module.exports = {
	name: 'help',
	execute(message, args) {
        const reponse = "You can call me by typing 'coffee <command>'" +
        "\n\n" + "Available commands: countdown, help, ping, speak, time, remindme"

		message.reply(reponse)
	},
}
