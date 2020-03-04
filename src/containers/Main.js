// { connect } - метод для того чтобы компонент мог обращаться к хранилищу и обмениваться с ним данными. Использование функции connect() означает применение некоторых улучшений и оптимизаций производительности
import { connect } from 'react-redux';
// bindActionCreators - принимает action, возвращает новый объект с методами
import { bindActionCreators } from 'redux';
// lodash - библиотека с методами для фильтрации, сортировки и множеством других (здесь используем декларативный подход при импорте)
import orderBy from 'lodash/orderBy';
// помещаем все actions из ../actions/books в переменную booksActions
import * as booksActions from '../actions/books';
import Main from '../components/Main';
import * as filterActions from "../actions/filter";

// функция для сортировки sortBy принимает массив с книгами и состояние filterBy из props
const sortBy = (books, filterBy) => {

    switch (filterBy) {

        case 'price_high':
            // метод orderBy принимает 3 параметра: массив, ключ(или массив с ключами) и способ сортировки (desc, asc)
            return orderBy(books, 'price', 'desc');
        case 'price_low':
            return orderBy(books, 'price', 'asc');
        case 'author':
            return orderBy(books, 'author', 'asc');

        default:
            return orderBy(books, 'id', 'desc');
    }
};

// функция фильтрации через поиск принимает books и searchQuery из props
const searchBooks = (books, searchQuery) =>
    books.filter(
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


// функция окончательной сортировки, которая учитывая результат фильтрации через filterBooks (по поиску), возвращает отсортированый массив через функцию sortBy
const finalSortBooks = (books, filterBy, searchQuery, numDisplays, checkboxManufacturers) => {


    return sortBy(searchBooks(filterCheckbox(books, checkboxManufacturers), searchQuery), filterBy).slice(0, numDisplays);
};


// переносим состояния из reducers\index.js в props
// данная функция будет запускаться через connect каждый раз при изменении состояния в хранилище и перезаписывать данные в props
const mapStateToProps = ({ books, filter }) => ({
    // массив с книгами сортируется, если books.items !== null
    books: books.items &&
        finalSortBooks(books.items, filter.filterBy, filter.searchQuery, filter.numDisplays, filter.checkboxManufacturers),
    isReady: books.isReady,
});


// переносим actions  из ./actions/books/books.js в props
// запускается  через connect 1 раз при первой загрузке
const mapDispatchToProps = dispatch => ({
    // bindActionCreators превращает action в метод, пример:
    // setBooks: books => dispatch(setBooks(books))
    ...bindActionCreators(booksActions, dispatch),
    ...bindActionCreators(filterActions, dispatch),
});


// Метод connect принимает 2 функции(вообще аргументов может быть 4): первая возвращает состояние, вторая - методы , переносят их в props.
// Так как функция возвращает компонент высшего порядка, её нужно вызвать повторно, передав базовый компонент React, для того, чтобы конвертировать его в компонент
export default connect(mapStateToProps, mapDispatchToProps)(Main);
