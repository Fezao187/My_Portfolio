// let ourFirstFunction = function()
// {
//     console.log("Hello World");
// }

// ourFirstFunction();
// ourFirstFunction();

// function ourFirstFunction()
// {
//     console.log("Hello World");
// }

// sayHelloTo("Katlego");
// sayHelloTo("Kat");

// function sayHelloTo(name)
// {
//     alert(`Hello ${name}`);
// }

// function drawCats(howManyTimes)
// {
//     for(let i = 0; i < howManyTimes; i++)
//     {
//         console.log(i + "=^.^=");
//     }
// }
// drawCats(10);

// function drawCats(howManyTimes, whatToDraw)
// {
//     for(let i = 0; i < howManyTimes; i++)
//     {
//         console.log(i + " " + whatToDraw);
//     }
// }
// drawCats(10, "0^0");

// add(2,5,6);
// function add(num1, num2, num3)
// {
//     console.log(num1 + num2 + num3);
// }

// console.log(double(20));
// function double(num)
// {
//     return num * 2;
// }

/* function findingPercentage(num, percent)
{
    return num *(percent/100);
}
let number = prompt("Enter the number you want the percentage of.");
let percentage = prompt("Enter the percentage.");
let answer = findingPercentage(number, percentage);
alert(percentage + "% of " + number + " is " + answer + "."); */

// function pickRandomWords(words) {
//     return words[Math.floor(Math.random() * words.length)];
// }

// let randomWords = ["Planets", "Worm", "Flower", "Car", "Okay"];
// console.log(pickRandomWords(randomWords));

// function insultGenerator() 
// {
//     let bodyParts = ["Face", "Nose", "Hair"];
//     let adjectives = ["Smelly", "Boring", "Stupid"];
//     let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

//     //Join all the random strings
//     let randomString = "Your " + pickRandomWords(bodyParts) + " is like a " 
//     + pickRandomWords(adjectives) + " " + pickRandomWords(randomWords) + ".";
//     console.log(randomString);
// }

// insultGenerator();

// console.log(fifthLetter("Katlego"))
// function fifthLetter(name)
// {
//     if(name.length < 5)
//     {
//         return "Your name has shorter than 5 characters";
//     }
//     return "The fifth letter of your name is " + name[4];
// }

//Challenge 1, two functions addition and multiplication respectively

// function add(num1, num2) {
//     return num1 + num2;
// }

// function multiply(num3, num4) {
//     return num3 * num4;
// }

// console.log(add(multiply(36325, 9824), 777));

// //Challenge 2, check if arrays are the same

// function areArraySame(arr1, arr2) 
// {
//     if (arr1.length !== arr2.length)
//     {
//         return false;
//     }
//     for(let i = 0; i < arr2.length; i++)
//     {
//         if(arr1[i] !== arr2[i])
//         {
//             return false;
//         }
//     }
//     return true;
// };

// console.log(areArraySame([1, 2, 3], [4, 5, 6]));
// console.log(areArraySame([1, 2, 3], [1, 2, 3]));
// console.log(areArraySame([1, 2, 3], [1, 2, 3, 4]));

// //Challenge 3 Hangman using functions

let words = ["javascript", "monkey", "amazing", "pancake"];
let word = pickWord();
let answerArray = [];
setupAnswerArray();
let guess;
let remainingLetters = word.length;
let lives = 3;

//Main game loop
while (remainingLetters > 0 && lives > 0) {
    showPlayerProgress();
    guess = getGuess();
    if (guess === null) 
    {
        break;
    } else if (guess.length > 1) 
    {
        alert("Please enter a single letter.");
    } else 
    {
        let correctGuesses = updateGameState();
        remainingLetters -= correctGuesses;
    }
}

showAnswerAndCongratulatePlayer(answerArray);

//Functions
function pickWord() 
{
    //return a random word
    return words[Math.floor(Math.random() * words.length)];
}

function setupAnswerArray() 
{
    for (let i = 0; i < word.length; i++) 
    {
        answerArray[i] = "_";
    }
}

function showPlayerProgress() 
{
    alert(answerArray.join(" "));
}

function getGuess() 
{
    guess = prompt("Guess a letter, or click Cancel to stop playing.");
    return guess;
}

function updateGameState() 
{
    guess = guess.toLowerCase();
    let correctG = 0;
    for (let j = 0; j < word.length; j++) 
    {
        if (word[j] === guess) 
        {
            if(answerArray[j] !== "_")
            {
                alert("You have alreday guessed this letter " + guess);
                break;
            }
            else
            {
                answerArray[j] = guess;
                correctG++;
            }
        }
    }
    if(correctG === 0)
    {
        lives--;
    }
    return correctG;
}

function showAnswerAndCongratulatePlayer() 
{
    if(guess === null)
    {
        alert("Sorry to see you leave.\n The answer was " + word);
    }
    else if(remainingLetters === 0)
    {
        alert("Congradualations! The word is " + word);
    }
    else if(lives === 0)
    {
        alert("You have ran out of lives. The word was " + word);
    }
    else
    {
        alert("Something seriously went wrong");
    }
}

// let data = 2;
// console.log(data + "GB is equal to " + convertGbToMb(data) + "MB.");

// convertSpeed(1024);
// function convertGbToMb(gb)
// {
//     // Function that converts Giggabytes to Megabytes
//     return gb * 1024;
// }

// function convertSpeed(speed)
// {
//     //This function conerts Mbps to Mb/s
//     let answer = speed / 8;
//     console.log(speed + "Mbps is equal to " + answer + "Mb/s.");
// }