import {heroes} from '../data/heroes';

/**
 *
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = (element) => {
    const id1 = '5d86371fd55e2e2a30fe1ccb2';
    const id2 = '5d86371fd55e2e2a30fe1ccb';
    findHero(id1, (error, hero1) => {

        if (error) {
            element.innerHTML = error;
            return;
        }

        findHero(id2, (error, hero2) => {
            if (error) {
                element.innerHTML = error;
                return;
            }
            element.innerHTML = `${hero1.name} / ${hero2.name}`;
        });
    });
};

/**
 *
 * @param {string} id
 * @param {(error: string|null, hero?: object) => void} callback
 */
const findHero = (id, callback) => {
    const hero = heroes.find(hero => hero.id === id);

    if (!hero) {
        callback(`Hero with id ${id} not found`);
        return;
    }

    callback(null, hero);
};