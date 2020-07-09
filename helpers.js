const fs            = require('fs')
const axios         = require('axios').default
const apiKeys       = require('./token')
const Discord       = require('discord.js')

const timeInOneDay  = 24 * 60 * 60 * 1000
const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function getTimeUntilTarget(hours, minutes, seconds) {
    let today = new Date()
    let target = new Date(today.getFullYear(), today.getMonth(), today.getDate(), hours, minutes, seconds)

    let timeUntilTarget = target - today

    if (timeUntilTarget < 0) timeUntilTarget = timeInOneDay - Math.abs(timeUntilTarget)

    return timeUntilTarget
}

function getTemplate() {
    return "Test it harder" +
        "\n" + "Make it cleaner" +
        "\n" + "Code it faster" +
        "\n" + "Makes us stronger" +
        "\n" + "Thank you coffee"
}

function getRandomGif(searchTerm) {
    let searchUrl = 'https://api.tenor.com/v1/search?q=' + searchTerm 
                + '&key=' + apiKeys.tenor 
                + '&limit=50'
                + '&contentfilter=high'
                + '&media_filter=minimal'

    let fallbackUrl = 'https://media1.tenor.com/images/a7ae94274d1bc120b1a59382ef5ac66b/tenor.gif'

    return axios.get(searchUrl)
        .then((res) => {
            let searchResults = res.data.results
            let numResults = searchResults.length

            if (numResults == 0) 
                return fallbackUrl

            return searchResults[0].media[0].gif.url
        })
        .catch(err => {
            console.log(err)
            return fallbackUrl
        })
}

function getCustomEmbed(dayOfTheWeek) {
    
    let messageTemplate = getTemplate().replace('<weekday>', dayOfTheWeek)
    
    const embed = new Discord.MessageEmbed()
        .setColor(32896)
        .setTitle('**Coffee Alert**')
        .setDescription(messageTemplate)
        .setFooter('made for appdev')

    return embed
}

module.exports = {
    timeInOneDay,
    daysOfTheWeek,
    getTimeUntilTarget,
    getTemplate,
    getRandomGif,
    getCustomEmbed
}
