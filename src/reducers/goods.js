const initialState = {
    // the parameter will pass the list loading status
    isReady: false,
    // items will contain a list of goods as objects
    items: null,
    selectedItem: 'nothing...',
};

// reducer is a pure function. It receives two parameters: 1- initial states and 2- action changing states
export default (state = initialState, action) => {
    switch (action.type) {

        case 'SET_ITEMS':
            return {
                ...state,
                items: action.payload,
                isReady: true
            };

        case 'SET_IS_READY':
            return {
                ...state,
                isReady: action.payload
            };

        case 'OPEN_ITEM':
            return {
                ...state,
                selectedItem: action.payload
            };



        default:
            return state;
    }
}