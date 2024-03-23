#!  /usr/bin/env node
import inquirer from "inquirer";
let randNumber = Math.floor(Math.random() * 100 + 1);
let count = 10;
let i = 1;
while (i <= count) {
    const randNumGenerator = await inquirer.prompt([
        { message: 'Enter a Number in 1-100 digit', type: 'number', name: 'user_Number' }
    ]);
    if (randNumGenerator.user_Number === randNumber) {
        console.log('Congratulation, You Guess the correct number');
        break;
    }
    else if (randNumGenerator.user_Number > randNumber) {
        if (count !== 1) {
            console.log('Your Number is High');
        }
    }
    else if (randNumGenerator.user_Number < randNumber) {
        if (count !== 1) {
            console.log('Your Number is low');
        }
    }
    else {
        if (count !== 1) {
            console.log('Please Enter only a Number');
        }
    }
    console.log(`You have ${--count} chances.`);
    if (count === 0) {
        console.log('You lost the game');
    }
}
;
