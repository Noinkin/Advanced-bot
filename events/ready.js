const client = require("../main");

client.on("ready", () =>
    console.log(`${client.user.tag} is up and ready to go!`)
);
