import {localhostUserToModel} from '../mappers/localhost-user.mapper';

/**
 *
 * @param {number} page
 * @returns
 */
export const  loadUsersByPage = async (page = 1) => {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}users?_page=${page}`),
          data = await res.json();
    return data.map( localhostUserToModel );
}