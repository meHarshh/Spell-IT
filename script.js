// script.js

// List of words
const words = ["Accommodate", "Embarrassment", "Conscientious", "Pneumonia", "Unnecessary"];
let currentIndex = 0;

// Function to speak the current word
function speakWord() {
    const word = words[currentIndex];
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(word);
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Sorry, your browser does not support speech synthesis.');
    }
}

// Function to check spelling
function checkSpelling() {
    const userInput = document.getElementById('userInput').value.trim();
    const correctSpelling = words[currentIndex];
    const feedbackMessage = document.getElementById('feedbackMessage');

    if (userInput === correctSpelling) {
        feedbackMessage.textContent = 'Correct! Well done.';
        feedbackMessage.style.color = 'green';
    } else {
        feedbackMessage.textContent = 'Incorrect. The correct spelling is: ' + correctSpelling;
        feedbackMessage.style.color = 'red';
    }
}

// Function to go to the next word
function nextWord() {
    currentIndex = (currentIndex + 1) % words.length;
    document.getElementById('userInput').value = '';
    document.getElementById('feedbackMessage').textContent = '';
}
