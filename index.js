#!/administrator/bin/env node
const readline = require('node:readline');
const {
    stdin: input,
    stdout: output,
} = require('node:process');
const number = Math.floor(Math.random() * 101)
let userNumber = -1;
let question = 'Загадано число в диапазоне от 0 до 100: ';

    let timeout = setTimeout(function tick(){

        const rl = readline.createInterface({ input, output });
        rl.question(question, (answer) => {
            userNumber = Number(answer);
            rl.close();
            if(number !== userNumber){
                if (number < userNumber){
                    question = 'Меньше: ';
                }else {
                    question = 'Больше: ';
                }
                timeout = setTimeout(tick, 100);
            }else {
                console.log('Отгадано число: ' + number);
            }
        });
    }, 100)





