// Первоначальное состояние данных, которые будем передавать в reducers
const initialState = {
    // параметр будет передавать состояние загрузки списка книг, произведенное через reducer
    isReady: false,
    // items будет содержать список книг в виде объектов
    items: null,
    selectedItem: 'nothing...',
};

// reducer - чистая функция. Получает два параметра: 1- первоначальные состояния и 2- action изменяющее состояния
export default (state = initialState, action) => {
    switch (action.type) {

        case 'SET_ITEMS':
            return {
                // копия содежимого массива
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