import {localhostUserToModel} from '../mappers/localhost-user.mapper';
import {User} from '../models/user'

/**
 *
 * @param {string|number} id
 * @returns {Promise<User>}
 */
export const getUserById = async (id) => {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}users/${id}`),
        data = await res.json();
    return localhostUserToModel(data);
}