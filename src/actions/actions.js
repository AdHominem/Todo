
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/**
 * Creates a new action creator by building a new function out of a supplied type and arguments
 * @param type The type of the action to create
 * @param argNames The arguments for the action
 * @returns {function(...[*])} An action creator of given type with the supplied arguments
 */
function makeActionCreator(type, ...argNames) {
    return (...args) => {
        let action = { type };
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index]
        });
        return action
    }
}

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

const addTodoInternal = makeActionCreator(ADD_TODO, 'text', 'id');
let nextTodoId = 0;
export const addTodo = (text, id) => {
    return addTodoInternal(text, nextTodoId++);
};

export const toggleTodo = makeActionCreator(TOGGLE_TODO, 'id');
export const setVisibilityFilter = makeActionCreator(SET_VISIBILITY_FILTER, 'filter');
