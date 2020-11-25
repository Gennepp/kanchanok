export const ADD_TO_FAV = 'ADD TO FAV';
export const REMOVE_FROM_FAV = 'REMOVE_FROM_FAV';
export const REMOVEALL_FROM_FAV = 'REMOVEALL_FROM_FAV';

export const addToFav = word => {
    return {
        type: ADD_TO_FAV,
        word: word,
    }
}

export const removeFromFav = wordId => {
    return {
        type: REMOVE_FROM_FAV,
        wid: wordId
    };
};

export const removeAllFromFav = wordId => {
    return {
        type: REMOVEALL_FROM_FAV,
        wid: wordId
    };
};