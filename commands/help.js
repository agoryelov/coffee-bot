module.exports = {
	name: 'help',
	execute(message, args) {
        const reponse = "You can call me by typing 'coffee <command>'" +
        "\n\n" + "Available commands: countdown, help, patch, ping, speak, time"

		message.reply(reponse)
	},
}
