import WORDS from '../../data/dummy-data';
import {
    DELETE_MY_WORD,
    CREATE_WORD,
    UPDATE_WORD,
} from '../actions/words';
import Word from '../../models/word';

const initialState = {
    availableWords: WORDS,
    userWords: WORDS.filter(word => word.ownerId === 'u1'),
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_WORD:
            const newWord = new Word(
                new Date().toString(),
                'u1',
                action.wordData.title,
                action.wordData.definition,
            );
            return {
                ...state,
                availableWords: state.availableWords.concat(newWord),
                userWords: state.userWords.concat(newWord)
            };
        case UPDATE_WORD:
            const wordIndex = state.userWords.findIndex(
                word => word.id === action.wid
            );
            const updatedWord = new Word(
                action.wid,
                state.userWords[wordIndex].ownerId,
                action.wordData.title,
                action.wordData.definition,
            );
            const updatedUserWords = [...state.userWords];
            updatedUserWords[wordIndex] = updatedWord;
            const availableWordIndex = state.availableWords.findIndex(
                word => word.id === action.wid
            );
            const updatedAvailableWords = [...state.availableWords];
            updatedAvailableWords[availableWordIndex] = updatedWord;
            return {
                ...state,
                availableWords: updatedAvailableWords,
                userWords: updatedUserWords
            };
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