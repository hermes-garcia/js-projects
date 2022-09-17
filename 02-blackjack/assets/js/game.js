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

    const types = ['C', 'D', 'H', 'S'],
          specialCards = ['A', 'J', 'Q', 'K'];

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

    const createDeck = () => {
        deck = [];
        for (let i = 2; i <= 10; i++) {
            for (const type of types) {
                deck.push( i + type );
            }
        }
        for (const card of specialCards) {
            for (const type of types) {
                deck.push( card + type );
            }
        }

        return _.shuffle(deck);
    };

    const askForCard = () => {
        if (deck.length === 0) {
            throw 'No more cards on deck';
        }
        return deck.pop();
    };

    const cardValue = (card) => {
        const value = card.substring(0, card.length-1);
        return ( isNaN(value) ) ?
                (value === 'A') ? 11 : 10
                : parseInt(value);
    };

    //Turn: 0 = first player, last = computer
    const updatePoints = ( card, playerTurn ) => {
        playersPoints[playerTurn] += cardValue(card);
        pointsContainers[playerTurn].innerText = playersPoints[playerTurn];
        return playersPoints[playerTurn];
    };

    const createCard = (card, playerTurn) => {
        const newCardImg = document.createElement('img');
        newCardImg.src = `assets/cards/${card}.png`;
        newCardImg.classList.add('game-card');
        newCardImg.alt = "Card";
        cardsContainers[playerTurn].append(newCardImg);
    };

    const checkWinner = () => {
        const [minPoints, computerPoints] = playersPoints;
        setTimeout(() => {
            if (minPoints > 21) {
                alert('Computer wins!');
            } else if (computerPoints === minPoints) {
                alert('It\'s a TIE');
            } else if (computerPoints > 21) {
                alert('PLAYER WIN!!!');
            } else {
                alert('Computer wins!');
            }
        },50);
    };

    const computerTurn = (minPoints) => {
        let computerPoints = 0;
        do {
            const card = askForCard();
            computerPoints = updatePoints(card, playersPoints.length-1);
            createCard(card, playersPoints.length-1);

        } while ( (computerPoints < minPoints) && (minPoints <= 21) );

        checkWinner();
    };


    /** Events */
    askCardButton.addEventListener('click', () => {
        const card = askForCard();
        const playerPoints = updatePoints(card, 0);
        createCard(card, 0);

        if (playerPoints > 21) {
            askCardButton.disabled = true;
            stopButton.disabled = true;
            computerTurn(playerPoints);
        } else if (playerPoints === 21) {
            askCardButton.disabled = true;
            stopButton.disabled = true;
            computerTurn(playerPoints);
        }
    });

    stopButton.addEventListener('click', () => {
        stopButton.disabled = true;
        askCardButton.disabled = true;
        computerTurn(playersPoints[0]);
    });

    newGameButton.addEventListener('click', () => {
        initGame();
    });

    return {
        newGame: initGame
    };
})();