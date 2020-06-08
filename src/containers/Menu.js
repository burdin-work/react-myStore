import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions  from '../actions/cart';
import Menu from '../components/Menu';
// uniqBy - method removes duplicate elements in an array
import uniqBy from 'lodash/uniqBy';
import * as filterActions from "../actions/filter";


const mapStateToProps = ({ cart }) => ({
    //  apply a function to each element of the array, summarize all item.price and return the final result
    totalPrice: cart.items.reduce((total,item) => total + item.price, 0),
    count: cart.items.length,
    items: uniqBy(cart.items, o => o.id),
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators( cartActions, dispatch),
    ...bindActionCreators(filterActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);