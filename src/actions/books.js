export const setBooks = books => ({
    type: 'SET_BOOKS',
    // передаём в payload массив с книгами
    payload: books
});