# Movie-Fan-Page

Welcome to **Movie Fan Page** – an interactive webpage for movie fans featuring a trivia quiz, movie posters, a trailer section, and a quote of the day.

## Project Description

This project is a movie fan page with a visually engaging interface. It showcases movie posters, a trailer for movie enthusiasts, and an interactive trivia quiz to test users' knowledge of popular movies. Additionally, users are greeted with a famous quote from various iconic movies each time they visit the page.

### Features

1. **Movie Posters**: Display various movie posters with hover animations.
2. **Watch the Trailer**: Embed a movie trailer from YouTube for users to watch.
3. **Quote of the Day**: A random movie quote displayed each time the page is loaded.
4. **Trivia Quiz**: An interactive quiz with multiple questions related to popular movie franchises like Star Wars, Harry Potter, and Marvel. Users can start and stop the quiz at any time.

## File Structure

1. **index.html**: The main structure of the webpage.
    - Contains sections for the movie posters, trailer, quote of the day, and trivia quiz.
    - Trivia quiz functionality is powered by JavaScript.
2. **styles.css**: Styling for the webpage.
    - Provides layout, font, background, and interactive hover effects.
    - Includes a dark theme with cinematic gold accents for an immersive experience.
3. **scripts.js**: JavaScript logic for the quote and trivia quiz.
    - Randomly selects and displays a movie quote on page load.
    - Includes the trivia quiz logic, featuring questions from popular movie franchises.

## Usage

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/movie-buff-central.git

2. **Open the project**:
   Open `index.html` in your browser to view the page.

3. **Customizing the Quiz**:
   You can add more trivia questions in the `scripts.js` file by editing the questions array. Each question has the following structure:
   `{
    question: "Your question here?",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    answer: 0  // Index of the correct option
    }`
   
4. **Modify the Trailer**:
   Change the trailer by updating the YouTube video ID in the <iframe> inside the `index.html` file.

## Acknowledgments
Developed by Ashok Kumar Soutapalli as part of a web development project to engage movie lovers with an immersive and interactive platform.

Feel free to fork, clone, and contribute!

This README file outlines the purpose, features, file structure, and usage of our project, making it ready for upload to GitHub.

   
