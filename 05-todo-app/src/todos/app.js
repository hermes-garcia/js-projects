import html from './app.html?raw'
import todoStore, {Filters} from '../store/todo.store';
import {renderPending, renderTodos} from './usecases';

const ElementIds = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    DeleteCompletedButton: '.clear-completed',
    TodoFilters: '.filtro',
    PendingCountLabel: '#pending-count',
};

/**
 *
 * @param {string} elementId
 */
export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter());
        renderTodos(ElementIds.TodoList, todos);
        updatePendingCount();
    };

    const updatePendingCount = () => {
        renderPending(ElementIds.PendingCountLabel);
    };

    // Invoked when App function is called
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    /** Html references */
    const newDescriptionInput = document.querySelector(ElementIds.NewTodoInput);
    const todoListUl = document.querySelector(ElementIds.TodoList);
    const deleteCompletedButton = document.querySelector(ElementIds.DeleteCompletedButton);
    const filtersLis = document.querySelectorAll(ElementIds.TodoFilters);

    /** Listeners */
    newDescriptionInput.addEventListener('keyup', (event) => {
        if (event.keyCode !== 13) return;
        if (event.target.value.trim().length === 0) return;

        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value = '';
    });

    todoListUl.addEventListener('click', (event) => {
        const parent = event.target.closest('li[data-id]');
        todoStore.toggleTodo(parent.getAttribute('data-id'));
        displayTodos();
    });

    todoListUl.addEventListener('click', (event) => {
        const target = event.target;
        const parent = event.target.closest('li[data-id]');
        if (!target.classList.contains('destroy') || !parent) return;

        todoStore.deleteTodo(parent.getAttribute('data-id'));
        displayTodos();
    });

    deleteCompletedButton.addEventListener('click', () => {
        todoStore.deleteCompleted();
        displayTodos();
    });

    filtersLis.forEach( element => {
        element.addEventListener('click', (event) => {
            filtersLis.forEach(el => {
               el.classList.remove('selected');
            });
            event.target.classList.add('selected');
            switch (event.target.innerText) {
                case Filters.All:
                    todoStore.setFilter(Filters.All);
                    break;
                case Filters.Completed:
                    todoStore.setFilter(Filters.Completed);
                    break;
                case Filters.Pending:
                    todoStore.setFilter(Filters.Pending);
                    break;
            }
            displayTodos();
        });
    });

};