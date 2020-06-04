const fs = require('fs');
const timeInOneDay = 24 * 60 * 60 * 1000

function getTimeUntilTarget(hours, minutes, seconds) {
    let today = new Date()
    let target = new Date(today.getFullYear(), today.getMonth(), today.getDay(), hours, minutes, seconds)

    let timeUntilTarget = target - today

    if (timeUntilTarget < 0) timeUntilTarget = timeInOneDay - Math.abs(timeUntilTarget)

    return timeUntilTarget
}

function getPatchNotes() {
    let patch = ''
    try {  
        patch = fs.readFileSync('patch.txt', 'utf8')
    } catch(e) {
        console.error(e)
    }

    return patch
}

module.exports = {
    timeInOneDay,
    getTimeUntilTarget,
    getPatchNotes
}