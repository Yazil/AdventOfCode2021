const fs = require("fs");
const readline = require('readline');

module.exports = {
    name: "Day 1: Sonar Sweep",
    execute: async () => {
        console.log("---PART 1---");
        try {
            const d = fs.createReadStream('./res/01/input', 'utf8');
            const rl = readline.createInterface({
                input: d,
                crlfDelay: Infinity
            });
            let last = -1;
            let largers = 0;
            let numbers = [];
            for await (n of rl) {
                var rN = parseInt(n);
                numbers.push(rN);
                if (last == -1) {
                    last = rN;
                    continue;
                }

                if (rN > last) largers++;

                last = rN;
            }
            console.log("Larger than the previous measurement :" + largers);
            console.log("---PART 2---");
            last = -1;
            largers = 0;
            for (let index = 0; index < numbers.length; index++) {
                let sum = 0;
                for (let i = index; i < index+3; i++) {
                    if(numbers[i] !== null) {
                        sum += numbers[i];
                    } else {
                        sum = -1;
                        break;
                    }
                }
                
                if(sum != -1) {
                    if(last == -1) {
                        last = sum;
                        continue;
                    }

                    if(sum > last) largers++;
                    last= sum;
                } else {
                    break;
                }
                
            }
            console.log("Larger than the previous measurement :" + largers);

        } catch (err) {
            console.error(err)
        }
    }
};