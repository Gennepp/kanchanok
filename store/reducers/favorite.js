import { ADD_TO_FAV, REMOVE_FROM_FAV, REMOVEALL_FROM_FAV } from "../actions/favorite";
import FavWord from '../../models/fav-word';
import { DELETE_MY_WORD } from '../actions/words';

const initialState = {
    words: {},
    totalAmount: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAV:
            const addedWord = action.word;
            const wordTitle = addedWord.title;
            const wordDefinition = addedWord.definition;

            let updatedOrNewFavWord;

            if (state.words[addedWord.id]) {
                // already have a word in the fav
                updatedOrNewFavWord = new FavWord(
                    state.words[addedWord.id].quantity + 1,
                    wordTitle,
                    wordDefinition,
                    state.words[addedWord.id].sum + 1,
                );
            }
            else {
                updatedOrNewFavWord = new FavWord(1, wordTitle, wordDefinition, 1);
            }
            return {
                ...state,
                words: { ...state.words, [addedWord.id]: updatedOrNewFavWord },
                totalAmount: state.totalAmount + 1,
            };
        case REMOVE_FROM_FAV:
            const selectedFavWord = state.words[action.wid];
            const currentQty = selectedFavWord.quantity;
            let updatedFavWords;
            if (currentQty > 1) {
                const updatedFavWord = new FavWord(
                    delete updatedFavWords[action.wid]
                    // selectedFavWord.quantity - 1,
                    // selectedFavWord.productPrice,
                    // selectedFavWord.productTitle,
                    // selectedFavWord.sum - selectedFavWord.productPrice
                );
                updatedFavWords = { ...state.words, [action.wid]: updatedFavWord };
            } else {
                updatedFavWords = { ...state.words };
                delete updatedFavWords[action.wid];
            }
            return {
                ...state,
                words: updatedFavWords,
                totalAmount: state.totalAmount - 1
            };
        case REMOVEALL_FROM_FAV:
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
            };
    }
    return state;
};