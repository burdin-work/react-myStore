const initialState = {
    searchQuery: '',
    // default sort
    filterBy: 'all',
    numDisplays: 10,
    // display all manufacturers by default
    checkboxManufacturers: [
        {name: 'beats', switcher: false},
        {name: 'marshall', switcher: false},
        {name: 'jbl', switcher: false},
        {name: 'apple', switcher: false},
        {name: 'razer',switcher : false}
    ],

};


export default (state = initialState, action) => {
    switch (action.type) {

        case 'SET_QUERY':
            return {
                ...state,
                searchQuery: action.payload
            };

        case 'SET_FILTER':
            return {
                ...state,
                filterBy: action.payload
            };

        case 'SET_DISPLAYING':
            return {
                ...state,
                numDisplays: action.payload
            };

        case 'SET_CHECKBOX_MANUFACTURERS':
            let checkboxes = [];

            checkboxes = [...state.checkboxManufacturers];

            //action.payload = value  from props; return value state[value] = !state[value]
            checkboxes[action.payload].switcher = !checkboxes[action.payload].switcher;

            return {
                ...state,
                checkboxesChecked: true,
                checkboxManufacturers: [
                    ...checkboxes
                ]
            };

        case 'MORE_GOODS':
            return {
                ...state,
                numDisplays: state.numDisplays + action.payload
            };

        default:
            return state;
    }
}

