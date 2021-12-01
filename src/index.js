const fs = require("fs");
const inquirer = require("inquirer");

const challenges = new Map();
const challengesFiles = fs.readdirSync('./src/challenges').filter(file => file.endsWith('.js'));

for (const file of challengesFiles) {
	const challenge = require(`./challenges/${file}`);
	challenges.set(challenge.name, challenge);
}

inquirer.prompt([
    {
        type:"list",
        name:"challenge",
        message:"Which challenge do you wish to execute ?",
        choices:Array.from(challenges.keys()),
    },
]).then((anwsers) => {
    challenges.get(anwsers.challenge).execute();
});