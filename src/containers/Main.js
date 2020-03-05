// { connect } - метод для того чтобы компонент мог обращаться к хранилищу и обмениваться с ним данными. Использование функции connect() означает применение некоторых улучшений и оптимизаций производительности
import { connect } from 'react-redux';
// bindActionCreators - принимает action, возвращает новый объект с методами
import { bindActionCreators } from 'redux';
// lodash - библиотека с методами для фильтрации, сортировки и множеством других (здесь используем декларативный подход при импорте)
import orderBy from 'lodash/orderBy';
// помещаем все actions из ../actions/goods в переменную goodsActions
import * as goodsActions from '../actions/goods';
import App from '../components/Main';
import * as filterActions from "../actions/filter";
import * as cartActions from "../actions/cart";

// функция для сортировки sortBy принимает массив с книгами и состояние filterBy из props
const sortBy = (goods, filterBy) => {

    switch (filterBy) {

        case 'price_high':
            // метод orderBy принимает 3 параметра: массив, ключ(или массив с ключами) и способ сортировки (desc, asc)
            return orderBy(goods, 'price', 'desc');
        case 'price_low':
            return orderBy(goods, 'price', 'asc');
        case 'author':
            return orderBy(goods, 'author', 'asc');

        default:
            return orderBy(goods, 'id', 'asc');
    }
};

// функция фильтрации через поиск принимает goods и searchQuery из props
const searchgoods = (goods, searchQuery) =>
    goods.filter(
        o =>
            o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
            o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
    );

// функция сортировки по checkbox
const filterCheckbox = (earphones, checkboxes) => {

    // создаём массив, в который входят только те имена поставщиков, где switcher = true
    const queries =[];
    for (let item of checkboxes){
        if(item.switcher) queries.push(item.name);
    }

    let newList = [];
    if(queries.length > 0){
    // из старого массива в новый будем брать только те объекты, где поставщик = true
    for (let query of queries){
        let cicleResult = [...earphones].filter(e => e.author === query);
        newList = newList.concat(cicleResult);
    }
    }
    else {
        newList = [...earphones];
    }

    return newList;
};


// функция окончательной сортировки, которая учитывая результат фильтрации через filtergoods (по поиску), возвращает отсортированый массив через функцию sortBy
const finalSortGoods = (goods, filterBy, searchQuery, numDisplays, checkboxManufacturers) => {


    return sortBy(searchgoods(filterCheckbox(goods, checkboxManufacturers), searchQuery), filterBy).slice(0, numDisplays);
};


// переносим состояния из reducers\index.js в props
// данная функция будет запускаться через connect каждый раз при изменении состояния в хранилище и перезаписывать данные в props
const mapStateToProps = ({ goods, filter }) => ({
    // массив с книгами сортируется, если goods.items !== null
    goods: goods.items &&
        finalSortGoods(goods.items, filter.filterBy, filter.searchQuery, filter.numDisplays, filter.checkboxManufacturers),
    isReady: goods.isReady,
    selectedItem: goods.selectedItem
});


// переносим actions  из ./actions/goods/goods.js в props
// запускается  через connect 1 раз при первой загрузке
const mapDispatchToProps = dispatch => ({
    // bindActionCreators превращает action в метод, пример:
    // setGoods: goods => dispatch(setGoods(goods))
    ...bindActionCreators(goodsActions, dispatch),
    ...bindActionCreators(filterActions, dispatch),
    ...bindActionCreators(cartActions, dispatch),
});


// Метод connect принимает 2 функции(вообще аргументов может быть 4): первая возвращает состояние, вторая - методы , переносят их в props.
// Так как функция возвращает компонент высшего порядка, её нужно вызвать повторно, передав базовый компонент React, для того, чтобы конвертировать его в компонент
export default connect(mapStateToProps, mapDispatchToProps)(App);
