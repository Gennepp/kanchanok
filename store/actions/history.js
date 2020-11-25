export const ADD_TO_HIS = 'ADD TO HIS';
export const REMOVE_FROM_HIS = 'REMOVE_FROM_HIS';

export const addToHis = word => {
    return { 
        type: ADD_TO_HIS, 
        word: word,
    }
}

export const removeFromHis = wordId => {
    return { 
        type: REMOVE_FROM_HIS, 
        wid: wordId };
  };