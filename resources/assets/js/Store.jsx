import { compose, createStore } from 'redux';
import { connect } from 'react-redux';

const SET_SEARCH_TERM = 'setSearchTerm';
const initialState = {
    searchTerm: '',
};

const reduceSearchTerm = (state, action) => {
    const newState = {};
    Object.assign(newState, state, { searchTerm: action.value });
    return newState;
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_TERM:
            return reduceSearchTerm(state, action);
        default:
            return state;
    }
};

const mapStateToProps = (state) => ({ searchTerm: state.searchTerm });

const mapDispatchToProps = (dispatch) => ({
    setSearchTerm: (searchTerm) => {
        dispatch({ type: SET_SEARCH_TERM, value: searchTerm });
    },
});

export const store = createStore(rootReducer, initialState, compose(
    window.devToolsExtension && window.devToolsExtension()
));

export const connector = connect(mapStateToProps, mapDispatchToProps);

