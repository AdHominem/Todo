import { VisibilityFilters, ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../actions/actions'
import { combineReducers } from 'redux'

const { SHOW_ALL } = VisibilityFilters;

/**
 * Updates the array filled with todos entries
 * @param state The current array of the todos
 * @param action The action to perform on the state
 * @returns {*} A new state after performing the action
 */
function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            console.log("Adding todo ", action.text, action.id);
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map((todo, id) => {
                if (id === action.id) {
                    console.log("Todo  ", action.id, " toggled to ", !todo.completed);
                        return Object.assign(
                            {},
                            todo,
                            {
                                completed: !todo.completed
                            }
                        )
                    }
                    return todo
                    });
        default:
            return state
    }
}

/**
 * Updates visibility
 * @param state The current visibility of the todos
 * @param action The new visibility setting
 * @returns {number|filter|*|NodeFilter} The new visibility as a changed state
 */
function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            console.log("Setting visibility to ", action.filter);
            return action.filter;
        default:
            return state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp
