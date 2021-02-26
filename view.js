const readline = require('readline');

class View {
    superView(questionsAndAnswers) {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });


        function getQuestion(questionsAndAnswers, questionsCount = 0, correctAnswersCount = 0) {
            let question = Object.keys(questionsAndAnswers[questionsCount])[0];
            let correctAnswer = questionsAndAnswers[questionsCount][question];
            let currentCorrectAnswersCount = correctAnswersCount;

            rl.question((question + '\n'), (userAnswer) => {
                if (questionsCount >= questionsAndAnswers.length - 1) {
                    console.log(`You correctly answered ${correctAnswersCount} of ${questionsCount + 1} cards.`);
                    rl.close()
                } else {
                    if (userAnswer === correctAnswer) {
                        console.log('Correct!' + '\n');
                        currentCorrectAnswersCount++;
                    } else {
                        console.log('Wrong!' + '\n');
                    }

                    getQuestion(questionsAndAnswers, questionsCount + 1, currentCorrectAnswersCount);
                }

            })
        }
        getQuestion(questionsAndAnswers)
    }

}

module.exports = View;
















// ================================== СИНХРОННО РАБОТАЕТ ==============================
// const readlineSync = require('readline-sync');

// class View {

//   game(model) {
//     let modelArr = Object.entries(model);
//     let counter = 0;
//     modelArr.forEach(el => {
//       let question = el[0];
//       let correctAnswer = el[1];
//       let userAnswer = readlineSync.question(question + '\n');
//       if (correctAnswer == userAnswer) {
//         console.log('Correct!' + '\n');
//         counter++
//       } console.log('Wrong!' + '\n');
//     })
//     console.log(`You correctly answered ${counter} of ${modelArr.length} cards.`);

//     let oneMoreTime = readlineSync.question('Do you want to play one more time?' + '\n');
//     if (oneMoreTime.toLocaleLowerCase() == 'yes') game()
//   }
// }

// module.exports = View


// const Model = require


// ==============================================

// function game(model) {
//   let modelArr = Object.entries(model);
//   let counter = 0;
//   modelArr.forEach(el => {
//     let question = el[0];
//     let correctAnswer = el[1];
//     let userAnswer = readlineSync.question(question + '\n');
//     if (correctAnswer == userAnswer) {
//       console.log('Correct!' + '\n');
//       counter++
//     } console.log('Wrong!' + '\n');
//   })
//   console.log(`You correctly answered ${counter} of ${modelArr.length} cards.`);

//   let oneMoreTime = readlineSync.question('Do you want to play one more time?' + '\n');
//   if (oneMoreTime.toLocaleLowerCase() == 'yes') game()
// }



// ==============================================================

// function game() {
//   let modelArr = Object.entries(model);
//   modelArr.forEach(el => {
//     let question = el[0];
//     let userAnswer = readlineSync.question(question + '\n');
//   })
// }

// game()