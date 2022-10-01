'use strict';

/**
 * Get card value
 * @param {string} card
 * @returns {number}
 */
export const cardValue = (card) => {
    const value = card.substring(0, card.length-1);
    return ( isNaN(parseInt(value)) ) ?
        (value === 'A') ? 11 : 10
        : parseInt(value);
};