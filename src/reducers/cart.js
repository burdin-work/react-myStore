// The initial state of the data that will be transmitted to reducers
const initialState = {
    items: [],
};


export default (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_TO_CART':
            // return duplicate storage
            return {
                // copy of the contents of the array + adding a new object to items
                ...state,
                items:[
                    ...state.items,
                    action.payload
                ]
            };

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                // if id is developed to the one we passed, then this object is excluded from the array
                items: state.items.filter(o => o.id !== action.payload)
            };

        default:
            return state;
    }
}