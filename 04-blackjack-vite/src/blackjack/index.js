import {askCard, computerTurn, createCard, createDeck, updatePoints} from './usecases';

/**
 * 2C = Two of Clubs
 * JD = Ten of Diamonds
 * KH = Ten of Hearts
 * AS = Eleven of Spades
 */
const gameModule = (() => {
    'use strict';

    let deck = [],
        playersPoints = [];

    /** HTML Selectors */
    const askCardButton = document.getElementById('ask-card-button'),
        stopButton = document.getElementById('stop-button'),
        newGameButton = document.getElementById('new-game-button');

    const pointsContainers = document.querySelectorAll('small'),
        cardsContainers = document.querySelectorAll('.cardsDiv');

    const initGame = (playersNum= 2) => {
        deck = createDeck();
        playersPoints = [];
        for (let i = 0; i < playersNum; i++) {
            playersPoints.push(0);
        }

        pointsContainers.forEach( container => container.innerText = '0' );
        cardsContainers.forEach( container => container.innerHTML = '' );

        stopButton.disabled = false;
        askCardButton.disabled = false;
    };


    /** Events */
    askCardButton.addEventListener('click', () => {
        const card = askCard(deck);
        const playerPoints = updatePoints(card, 0, playersPoints, pointsContainers);
        createCard(card, 0, cardsContainers);

        if (playerPoints > 21) {
            askCardButton.disabled = true;
            stopButton.disabled = true;
            computerTurn(deck, playerPoints, playersPoints, pointsContainers, cardsContainers);
        } else if (playerPoints === 21) {
            askCardButton.disabled = true;
            stopButton.disabled = true;
            computerTurn(deck, playerPoints, playersPoints, pointsContainers, cardsContainers);
        }
    });

    stopButton.addEventListener('click', () => {
        stopButton.disabled = true;
        askCardButton.disabled = true;
        computerTurn(deck, playersPoints[0], playersPoints, pointsContainers, cardsContainers);
    });

    newGameButton.addEventListener('click', () => {
        initGame();
    });

    return {
        newGame: initGame
    };
})();
