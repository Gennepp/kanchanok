export const DELETE_MY_WORD = 'DELETE_MY_WORD';
export const CREATE_WORD = 'CREATE_WORD';
export const UPDATE_WORD = 'UPDATE_WORD';

export const deleteMyWord = wordId => {
    return {
        type: DELETE_MY_WORD,
        wid: wordId
    };
};

export const createWord = (title, definition) => {
    return {
        type: CREATE_WORD,
        wordData: {
            title,
            definition,
        }
    };
};

export const updateWord = (id, title, definition) => {
    return {
        type: UPDATE_WORD,
        wid: id,
        wordData: {
            title,
            definition,
        }
    };
};
