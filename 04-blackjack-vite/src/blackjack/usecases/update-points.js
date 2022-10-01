'use strict';

import {cardValue} from './';

/**
 * Update html points container and return current turn points
 * @param {string} card
 * @param {number} playerTurn
 * @param {array<number>} playersPoints
 * @param {NodeListOf<HTMLElementTagNameMap[string]>} pointsContainers
 * @returns {number}
 */
export const updatePoints = (card, playerTurn, playersPoints, pointsContainers) => {
    playersPoints[playerTurn] += cardValue(card);
    pointsContainers[playerTurn].innerText = playersPoints[playerTurn];
    return playersPoints[playerTurn];
};