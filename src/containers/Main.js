// { connect } - method for the component to access the storage and exchange data with it. Using the connect () function means applying some performance improvements and optimizations.
import {connect} from 'react-redux';
// bindActionCreators - takes action, returns a new object with methods
import {bindActionCreators} from 'redux';
// lodash - library with methods for filtering, sorting and many others (here we use a declarative approach for import)
import orderBy from 'lodash/orderBy';
// transfer all actions from ../actions/goods to variable goodsActions
import * as goodsActions from '../actions/goods';
import Main from '../components/Main';
import * as filterActions from "../actions/filter";
import * as cartActions from "../actions/cart";

// sortBy sorting function accepts goods array and state filterBy from props
const sortBy = (goods, filterBy) => {

    switch (filterBy) {

        case 'price_high':
            // method orderBy takes 3 parameters: an array, a key (or an array with keys) and a sorting method (desc, asc)
            return orderBy(goods, 'price', 'desc');
        case 'price_low':
            return orderBy(goods, 'price', 'asc');
        case 'author':
            return orderBy(goods, 'author', 'asc');

        default:
            return orderBy(goods, 'id', 'asc');
    }
};

// search filtering function accepts goods and searchQuery from props
const searchgoods = (goods, searchQuery) =>
    goods.filter(
        o =>
            o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
            o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
    );

// checkbox sorting function
const filterCheckbox = (earphones, checkboxes) => {

    // create an array that includes only those provider names where switcher = true
    const queries = [];
    for (let item of checkboxes) {
        if (item.switcher) queries.push(item.name);
    }

    let newList = [];
    if (queries.length > 0) {
        // from the old array to the new we will take only those objects where the provider = true
        for (let query of queries) {
            let cicleResult = [...earphones].filter(e => e.author === query);
            newList = newList.concat(cicleResult);
        }
    } else {
        newList = [...earphones];
    }

    return newList;
};


// final sorting function, which, given the filtering result through filtergoods (by search), returns a sorted array through the sortBy function
const finalSortGoods = (goods, filterBy, searchQuery, numDisplays, checkboxManufacturers) => {


    return sortBy(searchgoods(filterCheckbox(goods, checkboxManufacturers), searchQuery), filterBy);
};


// transfer states from reducers \ index.js to props
// this function will be run through connect every time a state changes in the repository and overwrite data in props
const mapStateToProps = ({goods, filter}) => ({
    // array with goods is sorted if goods.items !== null
    goods: goods.items &&
        finalSortGoods(goods.items, filter.filterBy, filter.searchQuery, filter.numDisplays, filter.checkboxManufacturers).slice(0, filter.numDisplays),
    goodsLength: goods.items &&
        finalSortGoods(goods.items, filter.filterBy, filter.searchQuery, filter.numDisplays, filter.checkboxManufacturers).length,
    isReady: goods.isReady,
    selectedItem: goods.selectedItem,
    numDisplays: filter.numDisplays,
});


// transfer actions from ./actions/goods/goods.js to props
// run through connect 1 time on first boot
const mapDispatchToProps = dispatch => ({
    // bindActionCreators turns action into a method, example:
    // setGoods: goods => dispatch (setGoods (goods))
    ...bindActionCreators(goodsActions, dispatch),
    ...bindActionCreators(filterActions, dispatch),
    ...bindActionCreators(cartActions, dispatch),
});


// The connect method accepts 2 functions (there can be 4 arguments in general): the first returns a state, the second - methods, transfer them to props.
// Since the function returns a higher-order component, it needs to be called again, passing the underlying React component, in order to convert it to a component
export default connect(mapStateToProps, mapDispatchToProps)(Main);
