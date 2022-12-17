/**
 *
 * @param {string|number} id
 * @returns {Promise}
 */
export const deleteUserById = async (id) => {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}users/${id}`,{ method: 'DELETE' });
    return await res.json();
}