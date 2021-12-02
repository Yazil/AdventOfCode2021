const fs = require("fs");
const readline = require('readline');

module.exports = {
    name: "Day 2: Dive!",
    execute: async () => {
        console.log("---PART 1---");
        try {
            const d = fs.createReadStream('./res/02/input', 'utf8');
            const rl = readline.createInterface({
                input: d,
                crlfDelay: Infinity
            });
            let inst = [];
            let x = 0;
            let depth = 0;
            for await (n of rl) {
                let splited = n.split(" ");
                inst.push(splited);
                switch (splited[0]) {
                    case "forward":
                        x += parseInt(splited[1]);
                        break;
                    case "down":
                        depth += parseInt(splited[1]);
                        break;
                    case "up":
                        depth -= parseInt(splited[1]);
                        break;
                    default:
                        break;
                }
            }
            console.log("x*depth=" + (x*depth));
            console.log("---PART 2---");
            x = 0;
            depth = 0;
            let aim = 0;
            for (n of inst) {
                switch (n[0]) {
                    case "forward":
                        x += parseInt(n[1]);
                        depth += aim*parseInt(n[1]);
                        break;
                    case "down":
                        aim += parseInt(n[1]);
                        break;
                    case "up":
                        aim -= parseInt(n[1]);
                        break;
                    default:
                        break;
                }
            }
            console.log("x*depth=" + (x*depth));
        } catch (err) {
            console.error(err)
        }
    }
};