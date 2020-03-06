// Первоначальное состояние данных, которые будем передавать в reducers
const initialState = {
    searchQuery: '',
    // сортировка по умолчанию
    filterBy: 'all',
    numDisplays: 10,
    // по умолчание отображаем всех производителей
    checkboxManufacturers: [
        {name: 'beats', switcher: true},
        {name: 'marshall', switcher: true},
        {name: 'jbl', switcher: true},
        {name: 'apple', switcher: true},
        {name: 'razer',switcher : true}
    ],
    checkboxesChecked: false

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
            // если это первое нажатие на checkbox - активируем панель с чекбоксами, где нету галочек теперь = false
            if (!state.checkboxesChecked) {
                checkboxes = state.checkboxManufacturers.map(item => {
                    return {name: item.name, switcher: !item.switcher};
                });
                // иначе - это просто копия массива
            } else {
                checkboxes = [...state.checkboxManufacturers];
            }
            //action.payload = value  из props; возвращаемое значение state[value] = !state[value]
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

