import {heroes} from '../data/heroes';

/**
 *
 * @param {HTMLDivElement} element
 */
export const generatorsAsyncComponent = async(element) => {
    const generator = getHeroGenerator();
    let hasHero = true;
    do {
        const {value, done} = await generator.next();
        element.innerHTML = value;
        hasHero = !done;
    } while ( hasHero );
}

async function* getHeroGenerator() {
    for (const hero of heroes) {
        await sleep();
        yield hero.name;
    }

    return 'No more heroes';
}

const sleep = () => {
    return new Promise( (resolve) => {
        setTimeout((res) => {
            resolve();
        },500);
    });
}
