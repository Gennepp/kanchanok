import WORDS from '../../data/dummy-data';
import { DELETE_MY_WORD } from '../actions/words';

const initialState = {
    availableWords: WORDS,
    userWords: WORDS.filter(word => word.ownerId === 'u1'),
};

export default (state = initialState, action) => {
    switch (action.type) {
        case DELETE_MY_WORD:
            return {
                ...state,
                userWords: state.userWords.filter(
                    word => word.id !== action.wid
                ),
                availableWords: state.availableWords.filter(
                    word => word.id !== action.wid
                )
            };
    }
    return state;
};