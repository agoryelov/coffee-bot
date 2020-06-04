const { getTimeUntilTarget } = require('../helpers')
const { coffeeTime } = require('../config')

function formatTime(t) {
    let ms = t % 1000
    t = (t - ms) / 1000
    let secs = t % 60
    t = (t - secs) / 60
    let mins = t % 60
    let hrs = (t - mins) / 60

    return `${hrs} hours ${mins} minutes and ${secs} seconds`
}

module.exports = {
	name: 'countdown',
	execute(message, args) {
        const tMinus = getTimeUntilTarget(coffeeTime.hour, coffeeTime.minute, coffeeTime.second)
        console.log(tMinus)
        const tFormatted = formatTime(tMinus)

        message.channel.send(`:coffee: Coffee time :coffee: is in ${tFormatted}`)
	},
}
