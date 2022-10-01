'use strict';

import {askCard, checkWinner, createCard, updatePoints} from './';

/**
 * Play computer turn
 * @param {array<string>} deck
 * @param {number} minPoints
 * @param {array<number>} playersPoints
 * @param {NodeListOf<HTMLElementTagNameMap[string]>} pointsContainers
 * @param {NodeListOf<HTMLElementTagNameMap[string]>} cardsContainers
 */
export const computerTurn = (deck, minPoints, playersPoints, pointsContainers, cardsContainers) => {

    if ( !deck || deck.length === 0) throw new Error('Card deck are required');
    if ( !minPoints ) throw new Error('Min points are required');
    if ( !playersPoints || playersPoints.length === 0 ) throw new Error('Players points are required');

    let computerPoints = 0;
    do {
        const card = askCard(deck);
        computerPoints = updatePoints(card, playersPoints.length-1, playersPoints, pointsContainers);
        createCard(card, playersPoints.length-1, cardsContainers);

    } while ( (computerPoints < minPoints) && (minPoints <= 21) );

    checkWinner(playersPoints);
};