const Discord = require('discord.js')
const client = new Discord.Client()
const secret = require('./creds.js')

const coffeeAlertMessage = `
@here ☕ Coffee Alert ! ☕

${"```css"}
This alert was provided to you by CoffeeBot (aka Andrey 2.0)
${"```"}
`

function sendAlert(channelName, alertMessage) {
    let channel = client.channels.cache.find(u => u.name === channelName)
    if (!channel) channel = client.channels.cache.find(u => u.type === 'text')
    
    channel.send(alertMessage)
}

client.once('ready', () => {
    console.log('Ready!')
    const channel = 'appdev'

    sendAlert(channel, coffeeAlertMessage)
    setInterval(sendAlert, (24 * 60 * 1000), channel, coffeeAlertMessage)
})


client.login(secret)