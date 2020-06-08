export const setGoods = goods => ({
    type: 'SET_ITEMS',
    // transfer to payload an array of goods
    payload: goods
});

export const openSelectedItem = item => ({
    type: 'OPEN_ITEM',
    payload: item
});