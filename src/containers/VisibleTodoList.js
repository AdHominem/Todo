import { connect } from 'react-redux'
import { toggleTodo } from '../actions/actions'
import TodoList from '../components/TodoList'

// Filters an array of todos according to a specified filter
const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        default:
            console.log("Invalid filter was supplied to getVisibleTodos");
            return todos
    }
};

// Passes the list as a prop after being filtered
const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

// Passes a callback function onTodoClick as a prop to toggle an element of todos
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList