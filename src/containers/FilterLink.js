import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/actions'
import Link from '../components/Link'


/*
FilterLink receives a filter as a prop
 */

// Sets active to true if the state's visibility filter is the same as the prop's
const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
};

// Callback onClick to set the visibility
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
};

// The Link component will receive the props!
const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink