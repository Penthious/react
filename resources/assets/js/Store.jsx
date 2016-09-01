import redux, { createStore } from 'redux';
import reactRedux from 'react-redux';

const SET_SEARCH_TERM = 'setSearchTerm';
const initialState = {
    searchTerm: '',
};

const reduceSearchTerm = (state, action) => {
    const newState = {};
    Object.assign(newState, state, { searchTerm: action.value });

    return newState;
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_TERM:
            return reduceSearchTerm(state, action);
        default:
            return state;
    }
};

export const store = createStore(rootReducer());
const mapStateToProps = (state) => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch) => {
    return {
        setSearchTerm(searchTerm) {
            dispatch({ type: SET_SEARCH_TERM, value: searchTerm });
        },
    };
};

export const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps);

