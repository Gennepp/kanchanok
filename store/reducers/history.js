import { ADD_TO_HIS, REMOVE_FROM_HIS } from "../actions/history";
import HisWord from '../../models/his-word';
import { DELETE_MY_WORD } from '../actions/words';

const initialState = {
    words: {},
    totalAmount: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_HIS:
            const addedWord = action.word;
            const wordTitle = addedWord.title;
            const wordDefinition = addedWord.definition;

            let updatedOrNewHisWord;

            if (state.words[addedWord.id]) {
                // already have a word in the his
                updatedOrNewHisWord = new HisWord(
                    state.words[addedWord.id].quantity + 1,
                    wordTitle,
                    wordDefinition,
                    state.words[addedWord.id].sum + 1,
                );
            }
            else {
                updatedOrNewHisWord = new HisWord(1, wordTitle, wordDefinition, 1);
            }
            return {
                ...state,
                words: { ...state.words, [addedWord.id]: updatedOrNewHisWord },
                totalAmount: state.totalAmount + 1,
            };
            case REMOVE_FROM_HIS:
                return initialState;
            case DELETE_MY_WORD:
            if (!state.words[action.wid]) {
                return state;
            }
            const updatedWords = { ...state.words };
            const wordTotal = state.words[action.wid].sum;
            delete updatedWords[action.wid];
            return {
                ...state,
                words: updatedWords,
                totalAmount: state.totalAmount - wordTotal,
            };Î
            
    }
    return state;
};