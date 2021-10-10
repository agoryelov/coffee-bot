# coffee-bot

> Coffee reminder bot for your discord server

## Features

- Almost daily coffee alerts
- Semi-useful bot commands
- Bullet-proof co-op codebase

## Getting started

### Prerequisites

- NodeJS 12.0+

### Running locally

- Clone the repo `git clone https://github.com/agoryelov/CoffeeBot.git`
- Add token.js file to root folder 
```
cd CoffeeBot 
touch token.js
```
- Add discord (https://discord.com/developers/applications) and tenor (https://tenor.com/gifapi) api keys to token.js
```
const apiKeys = {
    discord: 'DISCORDKEY',
    tenor: 'TENORKEY'
}

module.exports = apiKeys
```
- (Optional) Add templates.txt to root folder with custom message templates
- Install dependencies `npm i`
- Start the bot `node index.js`
