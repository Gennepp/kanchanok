import WORDS from '../../data/dummy-data';

const initialState = {
    availableWords: WORDS,
    userWords: WORDS.filter(prod => prod.ownerId === 'u1'),
};

export default (state = initialState, action) => {
    return state;
};