import {heroes} from '../data/heroes';

/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncComponent = async(element) => {

    console.log('init');
    const id1 = '5d86371fd55e2e2a30fe1ccb2';
    const id2 = '5d86371fd55e2e2a30fe1ccb';
    findHero(id1)
        .then( name => element.innerHTML = name )
        .catch( name => element.innerHTML = name );
    console.log('end');
}

/**
 *
 * @param {string} id
 * @return {Promise<string>}
 */
const findHero = async(id) => {
    const hero = heroes.find(hero => hero.id === id);
    if (!hero) throw `Hero with id ${id} not found`;

    return hero.name;
};