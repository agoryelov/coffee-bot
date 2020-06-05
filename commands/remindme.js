const parse = require('parse-duration')
const moment = require('moment')

module.exports = {
	name: 'remindme',
	execute(message, args) {
        let newArgs = args.join(' ').split('"')
        
        let time = newArgs[0]

        if (!time) return
        let timeInMs = parse(time, 'ms')

        if (!timeInMs) return
        let remindMessage = newArgs[1]

        setTimeout(() => {
            
            let timeAgo = moment().subtract(timeInMs).fromNow()
            if (remindMessage) message.reply(`Your reminder from ${timeAgo} has arrived: "${remindMessage}"`)
            else message.reply(`Your reminder from ${timeAgo} has arrived :eyes:`)

        }, timeInMs)

        let reminderDuration = moment(Date.now() + timeInMs).fromNow()
        let targetTime = moment(Date.now() + timeInMs).format('LLL')

        message.reply(`I will be messaging you ${reminderDuration} on ${targetTime}`)
	},
}