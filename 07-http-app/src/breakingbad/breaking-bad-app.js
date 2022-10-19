
/**
 * @returns {Object}
 */
const fetchQuote = async () => {
    const endpoint = 'https://api.breakingbadquotes.xyz/v1/quotes',
          resp = await fetch(endpoint),
          data = await resp.json();
    return data[0];
}

/**
 *
 * @param {HTMLDivElement} element
 */
export const BreakingBadApp = async (element) => {
    document.querySelector('#app-title').innerHTML = 'Breaking Bad App';
    element.innerHTML = 'Loading...';

    const quoteLabel = document.createElement('blockquote'),
          authorLabel = document.createElement('h3'),
          nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerHTML = 'Next Quote';

    const renderQuote = ({quote, author}) => {
        quoteLabel.innerHTML = quote;
        authorLabel.innerHTML = author;
        element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);
    };

    const data = await fetchQuote();
    renderQuote(data);

    nextQuoteButton.addEventListener('click', async() => {
        nextQuoteButton.setAttribute('disabled','disabled');
        const data = await fetchQuote();
        renderQuote(data);
        nextQuoteButton.removeAttribute('disabled');
    });
};