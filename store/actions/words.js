export const DELETE_MY_WORD = 'DELETE_MY_WORD';

export const deleteMyWord = wordId => {
    return {
        type: DELETE_MY_WORD, 
        wid: wordId };
  };