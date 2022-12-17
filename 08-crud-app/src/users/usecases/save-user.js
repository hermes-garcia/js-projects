import {User} from '../models/user'
import {userModelToLocalhost} from '../mappers/user-localhost.mapper';
import {localhostUserToModel} from '../mappers/localhost-user.mapper';

/**
 *
 * @param {Like<User>} userLike
 */
export const saveUser = async( userLike ) => {
    const user = new User(userLike);
    if (!user.firstName || !user.lastName) throw new Error('first name & last name are required');

    const userToSave = userModelToLocalhost(user);

    let userUpdated;

    if (user.id) {
        userUpdated = await updateUser(userToSave);
    } else {
        userUpdated = await createUser(userToSave);
    }

    return localhostUserToModel(userUpdated);
};

/**
 *
 * @param {User} user
 * @return {Promise<void>}
 */
const createUser = async( user ) => {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}users`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await res.json();
}


/**
 *
 * @param {User} user
 * @return {Promise<void>}
 */
const updateUser = async( user ) => {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}users/${user.id}`, {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await res.json();
}