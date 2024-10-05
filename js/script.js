// Load the questions from the JSON file
const fs = require('fs');
const path = require('path');

// Load questions from test_data/questions.json
const questionsPath = path.join(__dirname, '../test_data/questions.json');
const questions = JSON.parse(fs.readFileSync(questionsPath, 'utf8')).quiz;

// Function to shuffle the questions array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Shuffle the quiz questions
const shuffledQuestions = shuffleArray(questions);

// Output the shuffled questions
console.log(shuffledQuestions);
