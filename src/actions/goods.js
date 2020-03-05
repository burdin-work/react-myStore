export const setGoods = goods => ({
    type: 'SET_ITEMS',
    // передаём в payload массив с товарами
    payload: goods
});

export const openSelectedItem = item => ({
    type: 'OPEN_ITEM',
    payload: item
});