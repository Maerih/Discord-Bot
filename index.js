const Discord = require('discord.js')
const client = new Discord.Client({intents: 32767})

client.on('message', message => {
    if(message.content === ping) {
        message.channel.send('pong')

    }
})

const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send('checked')
})

app.listen(3000, () => {
    console.log("bot alive")
})

const token = "YOUR-DISCORD-BOT-TOKEN"

client.login(token)