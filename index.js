const keepAlive = require("./server")

const dotenv = require('dotenv');

const TOKEN = (process.env.TOKEN);

const { Client } = require('discord.js-selfbot-v13')

const client = new Client();

client.on('ready', () => {

  console.log(`${client.user.username} Successfully Logged in!`)

})

keepAlive()

client.login(TOKEN);
