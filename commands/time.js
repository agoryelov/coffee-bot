const { getTimeUntilTarget } = require('../helpers')
const { coffeeTime } = require('../config')

module.exports = {
	name: 'time',
	execute(message, args) {
        const tMinus = getTimeUntilTarget(coffeeTime.hour, coffeeTime.minute, coffeeTime.second)

        if (tMinus < (8 * 60 * 60 * 1000)) {
            message.channel.send(`<:soup:717489579552145451> Coffee time <:soup:717489579552145451> is today at ${coffeeTime.hour}:00 PST!`)
        } else {
            message.channel.send(`<:soup:717489579552145451> Coffee time <:soup:717489579552145451> is tomorrow at ${coffeeTime.hour}:00 PST!`)
        }
	},
}