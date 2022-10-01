'use strict';

/**
 * Return a card from deck
 * @param {array<string>} deck
 * @returns {string}
 */
export const askCard = (deck) => {

    if (!deck || deck.length === 0) {
        throw new Error('No more cards on deck');
    }
    return deck.pop();
};