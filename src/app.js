import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {
    quizData.currentQuestionIndex = 0;
    quizData.quizCompleted = false; //quiz starts from the beginning and is not completed when the application loads.

    initWelcomePage();
};

window.addEventListener('load', loadApp);
