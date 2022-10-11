/**
 *
 * @param {HTMLDivElement} element
 */
export const environmentsComponents = (element) => {
    console.log(import.meta.env);
    element.innerHTML = `
        Dev: ${import.meta.env.DEV} <br />
        Prod: ${import.meta.env.PROD} <br />
        Key: ${import.meta.env.VITE_API_KEY} <br />
        Url: ${import.meta.env.VITE_BASE_URL} <br />
    `;
}