import {Todo} from '../models/todo.model';
import {createTodoHtml} from '../usecases';

let todoList;

/**
 *
 * @param {string} elementId
 * @param {Todo[]} todos
 */
export const renderTodos = (elementId, todos = []) => {
    if (!todoList) todoList = document.querySelector(elementId);
    if (!todoList) throw new Error(`Element ${elementId} not found`);
    todoList.innerHTML = '';
    todos.forEach(todo => {
        todoList.append(createTodoHtml(todo));
    });
};