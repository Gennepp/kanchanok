import Word from '../../models/word';

export const DELETE_MY_WORD = 'DELETE_MY_WORD';
export const CREATE_WORD = 'CREATE_WORD';
export const UPDATE_WORD = 'UPDATE_WORD';
export const SET_WORDS = 'SET_WORDS';

export const fetchWords = () => {
    return async dispatch => {
        try {

            const response = await fetch('https://dictapp-94153.firebaseio.com/words.json');

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const resData = await response.json();
            const loadedWords = [];

            for (const key in resData) {
                loadedWords.push(new Word(
                    key,
                    'u1',
                    resData[key].title,
                    resData[key].definition));
            }

            dispatch({
                type: SET_WORDS,
                words: loadedWords
            });
        } catch (err) {
            throw err;
        }
    }

};

export const deleteMyWord = wordId => {
    return {
        type: DELETE_MY_WORD,
        wid: wordId
    };
};

export const createWord = (title, definition) => {
    return async dispatch => {
        const response = await fetch('https://dictapp-94153.firebaseio.com/words.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                definition
            })
        });

        const resData = await response.json();

        console.log(resData);

        dispatch({
            type: CREATE_WORD,
            wordData: {
                id: resData.name,
                title,
                definition,
            }
        });
    };
};

export const updateWord = (id, title, definition) => {
    return async dispatch => {
        const response = await fetch('https://dictapp-94153.firebaseio.com/words.json');

        if (!response.ok) {
            throw new Error('Something went wrong!');
        }

        const resData = await response.json();
        const loadedWords = [];

        for (const key in resData) {
            loadedWords.push(new Word(
                key,
                'u1',
                resData[key].title,
                resData[key].definition));
        }

        dispatch({
            type: UPDATE_WORD,
            wid: id,
            wordData: {
                title,
                definition,
            }
        });
    };
};
