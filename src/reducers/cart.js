// Первоначальное состояние данных, которые будем передавать в reducers
const initialState = {
    items: [],
};


export default (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_TO_CART':
            // возврат копии хранилища
            return {
                // копия содежимого массива + добавление нового объекта в items
                ...state,
                items:[
                    ...state.items,
                    action.payload
                ]
            };

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                // если id развен тому, который мы передали, то данный объект исключаем из массива
                items: state.items.filter(o => o.id !== action.payload)
            };

        default:
            return state;
    }
}