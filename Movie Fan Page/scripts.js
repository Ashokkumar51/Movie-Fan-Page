// Quote of the Day
const quotes = [
    "Do, or do not. There is no try. - Yoda",
    "I am Iron Man. - Tony Stark",
    "May the Force be with you. - Star Wars",
    "With great power comes great responsibility. - Spider-Man"
];

function displayQuote() {
    const quoteElement = document.getElementById('quote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.innerText = quotes[randomIndex];
}

window.onload = function() {
    displayQuote();
};

// Trivia Quiz (for separate quiz page)
let currentQuestionIndex = 0; // To keep track of the current question
let score = 0; // To track the score
let quizActive = true; // To track if the quiz is active
let questions = [
    {
        question: "What is the name of the spaceship in Star Wars?",
        options: ["Millennium Falcon", "Enterprise", "TARDIS", "Serenity"],
        answer: 0
    },
    {
        question: "Who built C-3PO?",
        options: ["Luke Skywalker", "Anakin Skywalker", "Obi-Wan Kenobi", "Yoda"],
        answer: 1
    },
    {
        question: "Who was the first character to speak in the original Star Wars movie (A New Hope)?",
        options: ["Princess Leia", "Luke Skywalker", "Darth Vader", "C-3PO"],
        answer: 3
    },
    {
        question: "What is the Emperor’s real name?",
        options: ["Sheev Palpatine", "Anakin Skywalker", "Count Dooku", "Kylo Ren"],
        answer: 0
    },
    {
        question: "What color is Mace Windu’s lightsaber?",
        options: ["Blue", "Red", "Green", "Purple"],
        answer: 3
    },
    {
        question: "What is the name of Harry Potter's pet owl?",
        options: ["Hedwig", "Crookshanks", "Scabbers", "Errol"],
        answer: 0
    },
    {
        question: "What was Voldemort’s original name before he changed it?",
        options: ["Salazar Slytherin", "Marvolo Gaunt", "Tom Riddle", "Thomas Gaunt"],
        answer: 2
    },
    {
        question: "What position does Harry play on his Quidditch team?",
        options: ["Beater", "Chaser", "Seeker", "Keeper"],
        answer: 2
    },
    {
        question: "Who is the Half-Blood Prince?",
        options: ["Severus Snape", "Albus Dumbledore", "Tom Riddle", "Draco Malfoy"],
        answer: 0
    },
    {
        question: "Who gave Harry the Invisibility Cloak?",
        options: ["Remus Lupin", "James Potter", "Sirius Black", "Albus Dumbledore"],
        answer: 3
    },
    {
        question: "Which Avenger has fought in World War II?",
        options: ["Black Widow", "Iron Man", "Captain America", "Thor"],
        answer: 2
    },
    {
        question: "What are the names of Wanda Maximoff’s twin children?",
        options: ["Tommy and Billy", "Peter and Steve", "Sam and James", "John and Eddie"],
        answer: 0
    },
    {
        question: "What is Tony's wife’s name?",
        options: ["Sarah", "Linda", "Laura", "Pepper Potts"],
        answer: 3
    },
    {
        question: "Does how many times Morgan Stark loves her father Tony Stark?",
        options: ["I love you 3000", "I love you 4000", "I love you 5000", "I love you 6000"],
        answer: 0
    },
    {
        question: "What is the name of Tony Stark's AI assistant after J.A.R.V.I.S. evolves into Vision?",
        options: ["H.O.M.E.R.", "F.R.I.D.A.Y.", "U.L.T.R.O.N.", "S.H.I.E.L.D."],
        answer: 1
    },
    // Add more questions here as needed
];

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to start the quiz and shuffle questions
function startQuiz() {
    questions = shuffleArray(questions); // Shuffle the questions
    currentQuestionIndex = 0; // Start with the first question
    score = 0; // Reset the score
    quizActive = true; // Mark quiz as active
    displayQuestion();
}

// Function to display the current question
function displayQuestion() {
    if (!quizActive) return; // If quiz is stopped, do nothing
    
    let quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = ""; // Clear previous question

    if (currentQuestionIndex < questions.length) {
        let questionNumber = currentQuestionIndex + 1;

        // Create question number and question element
        let questionElement = document.createElement('p');
        questionElement.textContent = `Question ${questionNumber}: ${questions[currentQuestionIndex].question}`;
        quizContainer.appendChild(questionElement);

        // Shuffle options before displaying
        let shuffledOptions = shuffleArray(questions[currentQuestionIndex].options.slice());

        // Create options as buttons
        shuffledOptions.forEach((option, index) => {
            let button = document.createElement('button');
            button.textContent = option;
            button.onclick = function() {
                checkAnswer(option);
            };
            quizContainer.appendChild(button);
        });

        // Add stop button
        let stopButton = document.createElement('button');
        stopButton.textContent = "Stop Quiz";
        stopButton.onclick = stopQuiz;
        quizContainer.appendChild(stopButton);

    } else {
        // Display the final score when the quiz is completed
        quizContainer.innerHTML = `<p>Quiz Completed! Your score is ${score} out of ${questions.length}.</p>`;
    }
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
    if (!quizActive) return; // If quiz is stopped, do nothing

    let correctAnswerIndex = questions[currentQuestionIndex].answer;
    let correctAnswer = questions[currentQuestionIndex].options[correctAnswerIndex];

    if (selectedOption === correctAnswer) {
        score++; // Increment the score for a correct answer
        alert("Correct answer!");
    } else {
        alert("Wrong answer!");
    }
    currentQuestionIndex++; // Move to the next question
    displayQuestion(); // Display the next question
}

// Function to stop the quiz
function stopQuiz() {
    quizActive = false; // Mark quiz as inactive
    let quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = `<p>Quiz terminated. You scored ${score} out of ${currentQuestionIndex}.</p>`;
}

