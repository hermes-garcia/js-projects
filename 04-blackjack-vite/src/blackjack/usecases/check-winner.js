'use strict';

/**
 * Validate game winner
 * @param {array<number>} playersPoints
 */
export const checkWinner = (playersPoints) => {
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