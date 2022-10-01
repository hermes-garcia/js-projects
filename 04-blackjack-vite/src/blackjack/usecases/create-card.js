'use strict';

/**
 * Create html element for new card
 * @param card
 * @param playerTurn
 * @param {NodeListOf<HTMLElementTagNameMap[string]>} cardsContainers
 */
export const createCard = (card, playerTurn, cardsContainers) => {
    const newCardImg = document.createElement('img');
    newCardImg.src = `assets/cards/${card}.png`;
    newCardImg.classList.add('game-card');
    newCardImg.alt = "Card";
    cardsContainers[playerTurn].append(newCardImg);
};