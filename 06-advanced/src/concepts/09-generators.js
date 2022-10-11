/**
 *
 * @param {HTMLDivElement} element
 */
export const generatorsComponent = (element) => {
    const generator = idGenerator();

    const button = document.createElement('button');
    button.innerHTML = 'Click me!';
    element.append(button);

    const renderButton = () => {
        const {value} = generator.next();
        button.innerHTML = `Click ${value}`
    }

    button.addEventListener('click', renderButton)
}

function* idGenerator() {
    let currentId = 0;
    while (true) {
        yield ++currentId;
    }

    return 'No more values';
}

function* myFirstGenerator() {

    yield 'First value';
    yield 'Second value';
    yield 'Third value';
    yield 'Forth value';

    return 'No more values';
}