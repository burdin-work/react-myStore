import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions  from '../actions/cart';
import Menu from '../components/Menu';
// uniqBy - метод удаляет дубликаты элементов в массиве
import uniqBy from 'lodash/uniqBy';
import * as filterActions from "../actions/filter";

// получаем items из reducers\cart.js , создаём нужные состояния и переносим их в props
const mapStateToProps = ({ cart }) => ({
    //  применяем функцию к каждому элементу массива, суммируем все book.price и возвращаем итоговый результат
    totalPrice: cart.items.reduce((total,book) => total + book.price, 0),
    count: cart.items.length,
    items: uniqBy(cart.items, o => o.id),
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators( cartActions, dispatch),
    ...bindActionCreators(filterActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);