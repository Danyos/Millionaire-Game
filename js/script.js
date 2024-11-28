
let questionBox = document.querySelector(".question-box");
let questionOptions = document.querySelectorAll(".question-option");
let startNewGameButton = document.querySelector("#newGames");
let gameOverMessage = document.querySelector('.game_over');
let backgroundAudio = document.querySelector('#audioTag');

let changeQuestionButton = document.querySelector('#changeQuestion');

let callFriendButton = document.querySelector('#callFriend');
let fiftyFiftyButton = document.querySelector('#halfAction');
let askAudienceButton = document.querySelector('#hallAction');
let closeCallModalButton = document.querySelector('#closeCallModal');
let backgroundMusicControl = document.querySelector('.bg-volume');
let soundEffects = document.querySelector('#actionAudio');
let soundEffectsControl = document.querySelector('.acton-volume');
let optionSelectionTimeout = null;
let gameIteration = 0;
let currentQuestion;
const gameActions = {
    fiftyFifty: true,
    askAudience: true,
    callFriend: true,
    changeQuestion: true,
};
let audienceChance = 95;
let possibleAnswers = ['a', 'b', 'c', 'd'];
let gameSounds = {
    wrong: '../sound/audio/wrong_button.mp3',
    won: '../sound/audio/won_million.mp3',
    success: '../sound/audio/lets_play.mp3',
    bg: '../sound/audio/music_01.mp3',
    bg_1: '../sound/audio/music_02.mp3',
    bg_2: '../sound/audio/music_03.mp3',
};

backgroundMusicControl.onclick = toggleBackgroundMusic;

function toggleBackgroundMusic(status = true) {
    backgroundMusicControl.classList.toggle('used');
    let icon = backgroundMusicControl.children[0];
    backgroundAudio.loop = status;
    if (icon.getAttribute('data-type') === 'off') {
        icon.classList.remove('fa-volume-off');
        icon.classList.add('fa-volume-up');
        icon.setAttribute('data-type', 'on');
        backgroundAudio.muted = false;
        backgroundAudio.play();
    } else {
        icon.classList.remove('fa-volume-up');
        icon.classList.add('fa-volume-off');
        icon.setAttribute('data-type', 'off');
        backgroundAudio.muted = true;
        backgroundAudio.pause();
    }
}

soundEffectsControl.onclick = function () {
    soundEffectsControl.classList.toggle('used');
    let icon = soundEffectsControl.children[0];

    if (icon.getAttribute('data-type') === 'off') {
        icon.setAttribute('data-type', 'on');
        soundEffects.muted = false;
    } else {
        icon.setAttribute('data-type', 'off');
        soundEffects.muted = true;
    }
};

function resetGame() {
    gameOverMessage.classList.add('d-none');
    gameIteration = 0;
    optionSelectionTimeout = null;
    document.body.classList.remove('hidden-overflow');
    let completedElements = document.querySelectorAll('.prize-item.completed');
    completedElements.forEach(elem => {
        elem.classList.remove('completed');
    });
    gameActions.askAudience = true;
    gameActions.fiftyFifty = true;
    gameActions.changeQuestion = true;
    gameActions.callFriend = true;
    callFriendButton.classList.remove('used');
    fiftyFiftyButton.classList.remove('used');
    askAudienceButton.classList.remove('used');
    changeQuestionButton.classList.remove('used');

    let progressingElement = document.querySelector('.prize-item.progressing');
    progressingElement?.classList.remove('progressing');
    let lastPrizeItem = document.querySelector('.prize-item:last-child');
    lastPrizeItem.classList.add('progressing');
}

startNewGameButton.onclick = function () {
    resetGame();
    displayNextQuestion();
};

function displayNextQuestion() {
    let level = levelList[gameIteration];
    let levelQuestions = questions.filter(res => res.level_id === level.id);
    let randomIndex = Math.floor(Math.random() * levelQuestions.length);

    currentQuestion = levelQuestions[randomIndex];
    console.log(currentQuestion.current);
    questionBox.innerText = currentQuestion.question;
    questionOptions[0].innerText = `A. ${currentQuestion.a}`;
    questionOptions[1].innerText = `B. ${currentQuestion.b}`;
    questionOptions[2].innerText = `C. ${currentQuestion.c}`;
    questionOptions[3].innerText = `D. ${currentQuestion.d}`;
    if (!soundEffects.paused) {
        console.log("Audio is playing.");
    } else {
        console.log("Audio is paused or not started yet.");
    }
}

document.body.onload = function () {
    backgroundAudio.volume = '0.3';
    backgroundAudio.src = gameSounds.bg;
    displayNextQuestion();
};

questionOptions.forEach(option => {
    option.onclick = function () {
        handleOptionSelection(option);
    };
});

function handleOptionSelection(option) {
    if (!(option.innerHTML.length > 3)) {
        return;
    }
    if (optionSelectionTimeout) {
        console.log('Option already selected.');
        return;
    }
    option.classList.add('progressing');
    let selectedId = option.getAttribute('data-id');

    optionSelectionTimeout = setTimeout(() => {
        validateAnswer(selectedId, option);
        option.classList.remove('progressing');
    }, 1000);
}

function validateAnswer(selectedId, option) {
    if (selectedId === currentQuestion.current) {
        option.classList.add('completed');
        setTimeout(() => {
            option.classList.remove('completed');
            handleCorrectAnswer();
        }, 1000);
    } else {
        option.classList.add('danger');
        setTimeout(() => {
            option.classList.remove('danger');
            handleWrongAnswer();
        }, 1000);
    }
}

function handleCorrectAnswer() {
    soundEffects.src = gameSounds.success;
    soundEffects.play();
    optionSelectionTimeout = null;
    let progressElement = document.querySelector('.prize-item.progressing');
    let prizeItems = document.querySelectorAll('.prize-item');

    if (gameIteration === 0) {
        backgroundAudio.src = gameSounds.bg;
        backgroundAudio.play();
    } else if (gameIteration === 5) {
        backgroundAudio.src = gameSounds.bg_1;
        backgroundAudio.play();
    } else if (gameIteration === 10) {
        backgroundAudio.src = gameSounds.bg_2;
        backgroundAudio.play();
    }

    gameIteration++;
    audienceChance -= 5;
    if (gameIteration === 15) {
        progressElement.classList.remove('progressing');
        progressElement.classList.add('completed');
        endGame();
        console.log("Game Over.");
        return;
    }
    displayNextQuestion();
    progressElement.classList.remove('progressing');
    progressElement.classList.add('completed');
    prizeItems[15 - gameIteration - 1].classList.add('progressing');
}

function handleWrongAnswer() {
    optionSelectionTimeout = null;
    console.log('Wrong answer.');
    soundEffects.src = gameSounds.wrong;
    soundEffects.play()
    endGame();
}

function endGame() {
    updatePrizeAmount();
    document.body.classList.add('hidden-overflow');
    gameOverMessage.classList.remove('d-none');
}

function updatePrizeAmount() {
    let prizeAmount = 0;
    let prizeDisplay = document.querySelector('.price_won');
    let currentLevel = gameIteration - 1;

    if (currentLevel === 14) {
        prizeDisplay.innerHTML = '5,000,000';
        backgroundAudio.src = gameSounds.won;
        if (!backgroundAudio.paused) {
            backgroundAudio.paused;
        } else {
            backgroundAudio.muted = false;
            backgroundAudio.play();
            setTimeout(() => {
                backgroundAudio.muted = true;
                backgroundAudio.src = gameSounds.bg;
            }, 3000);
        }
    } else if (currentLevel >= 4 && currentLevel < 9) {
        prizeDisplay.innerHTML = '8,000';
    } else if (currentLevel >= 9) {
        prizeDisplay.innerHTML = '250,000';
    }
}

changeQuestionButton.onclick = function () {
    if (gameActions.changeQuestion) {
        gameActions.changeQuestion = false;
        displayNextQuestion();
        changeQuestionButton.classList.add('used');
    }
};

askAudienceButton.onclick = function () {
    if (gameActions.askAudience) {
        let audienceModal = document.querySelector('.hallModal');
        audienceModal.classList.remove('d-none');
        setTimeout(() => {
            audienceModal.classList.add('d-none');
        }, 3000);
        gameActions.askAudience = false;
        askAudienceButton.classList.add('used');
        let remainingChance = 100;

        let audienceVotes = {
            a: 0,
            b: 0,
            c: 0,
            d: 0,
        };

        let correctAnswerChance = Math.ceil(Math.random() * audienceChance);
        remainingChance -= correctAnswerChance;
        audienceVotes[currentQuestion.current] = correctAnswerChance;

        let otherAnswers = possibleAnswers.filter(res => res !== currentQuestion.current);

        otherAnswers.forEach(res => {
            let randomChance = Math.ceil(Math.random() * remainingChance);
            remainingChance -= randomChance;
            audienceVotes[res] = randomChance;
        });

        let bars = document.querySelectorAll('.bar');
        bars[0].style.height = audienceVotes.a + "%";
        bars[0].setAttribute('data-percent', audienceVotes.a + "%");
        bars[1].style.height = audienceVotes.b + "%";
        bars[1].setAttribute('data-percent', audienceVotes.b + "%");
        bars[2].style.height = audienceVotes.c + "%";
        bars[2].setAttribute('data-percent', audienceVotes.c + "%");
        bars[3].style.height = audienceVotes.d + "%";
        bars[3].setAttribute('data-percent', audienceVotes.d + "%");

        console.log(audienceVotes, remainingChance);
    }
};

closeCallModalButton.onclick = function () {
    closeCallModalButton.parentElement.parentElement.classList.add('d-none');
};

fiftyFiftyButton.onclick = function () {
    if (gameActions.fiftyFifty) {
        gameActions.fiftyFifty = false;
        fiftyFiftyButton.classList.add('used');

        let correctAnswer = currentQuestion.current;

        let otherAnswer = possibleAnswers
            .filter(res => res !== currentQuestion.current)
            .sort(() => Math.random() - 0.5)[0];

        let remainingAnswers = possibleAnswers.filter(
            res => !res.includes(correctAnswer) && !res.includes(otherAnswer)
        );

        currentQuestion[remainingAnswers[0]] = '';
        currentQuestion[remainingAnswers[1]] = '';

        questionOptions[0].innerHTML = `A. ${currentQuestion.a}`;
        questionOptions[1].innerHTML = `B. ${currentQuestion.b}`;
        questionOptions[2].innerHTML = `C. ${currentQuestion.c}`;
        questionOptions[3].innerHTML = `D. ${currentQuestion.d}`;
    }
};

callFriendButton.onclick = function () {
    let callModal = document.querySelector('.callModal');
    let callAnswerDisplay = document.querySelector('.callAnswerResult');
    if (gameActions.callFriend) {
        gameActions.callFriend = false;
        displayNextQuestion();
        callFriendButton.classList.add('used');
        let randomChance = Math.ceil(Math.random() * 100);
        if (randomChance <= audienceChance) {
            callAnswerDisplay.innerHTML = currentQuestion.current;
        } else {
            callAnswerDisplay.innerHTML = possibleAnswers
                .filter(res => res !== currentQuestion.current)
                .sort(() => Math.random() - 0.5)[0];

            console.log('Incorrect choice');
        }
        callModal.classList.remove('d-none');
    }
};
