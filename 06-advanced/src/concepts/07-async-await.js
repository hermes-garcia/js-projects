import {heroes} from '../data/heroes';

/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncAwaitComponent = async(element) => {

    console.time('start');

    const [value1, value2, value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ]);

    element.innerHTML = `${value1} / ${value2} / ${value3}`;

    console.timeEnd('start');
}

const slowPromise = () => new Promise( resolve => {
    setTimeout( () => {
        resolve('Slow promise');
    },2000);
});

const mediumPromise = () => new Promise( resolve => {
    setTimeout( () => {
        resolve('Medium promise');
    },1500);
});

const fastPromise = () => new Promise( resolve => {
    setTimeout( () => {
        resolve('Fast promise');
    },1000);
});