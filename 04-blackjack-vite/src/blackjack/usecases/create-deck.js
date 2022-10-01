'use strict';
import _ from 'underscore';

/**
 * Creates a new card deck
 * @returns {array<string>}
 */
export const createDeck = () => {
    const types = ['C', 'D', 'H', 'S'],
        specialCards = ['A', 'J', 'Q', 'K'];

    let deck = [];
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