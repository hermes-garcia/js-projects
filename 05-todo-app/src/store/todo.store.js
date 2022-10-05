import {Todo} from '../todos/models/todo.model';

export const Filters = {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending'
};

const state = {
    todos: [
        new Todo('Soul stone'),
        new Todo('Infinite stone'),
        new Todo('Time stone'),
        new Todo('Power stone'),
        new Todo('Reality stone'),
    ],
    filter: Filters.All,
};

const initStore = () => {
    loadStore();
    console.log('Init store 🥑');
};

const loadStore = () => {
    if (!localStorage.getItem('state')) return;
    const {todos = [], filter = Filters.All} = JSON.parse(localStorage.getItem('state'));
    state.todos = todos;
    state.filter = filter;
};

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state));
};

/**
 *
 * @param {Filters} filter
 * @returns {Todo[]}
 */
const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter( todo => todo.done );
        case Filters.Pending:
            return state.todos.filter( todo => !todo.done );
        default:
            throw new Error(`Option ${filter} is not valid`);
    }
};

/**
 *
 * @param {string} description
 */
const addTodo = ( description ) => {
    if (!description) throw new Error('Description is required');

    state.todos.push(new Todo(description));
    saveStateToLocalStorage();
};

/**
 *
 * @param {string} todoId
 */
const toggleTodo = ( todoId ) => {
    state.todos = state.todos.map(todo => {
        if (todo.id === todoId) {
            todo.done = !todo.done;
        }
        return todo;
    });
    saveStateToLocalStorage();
};

/**
 *
 * @param {string} todoId
 */
const deleteTodo = ( todoId ) => {
    if (!todoId) throw new Error('ToDo id is required');

    state.todos = state.todos.filter(todo => todo.id !== todoId);
    saveStateToLocalStorage();
};

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done);
    saveStateToLocalStorage();
};

/**
 *
 * @param {Filters} newFilter
 */
const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
    saveStateToLocalStorage();
};

const getCurrentFilter = () => {
    return state.filter;
};

export default {
    initStore,
    loadStore,
    getTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
};