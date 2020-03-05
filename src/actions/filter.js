export const setFilter = filter => ({
    type: 'SET_FILTER',
    payload: filter
});

export const setDisplaying = filter => ({
    type: 'SET_DISPLAYING',
    payload: filter
});

export const setSearchQuery = value => ({
    type: 'SET_QUERY',
    payload: value
});

export const setCheckboxManufacturers = filter => ({
    type: 'SET_CHECKBOX_MANUFACTURERS',
    payload: filter
});
