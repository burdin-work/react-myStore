import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions  from '../actions/cart';
import BookCard from '../components/BookCard';

// ??? как мы вытаскиваем id
// получаем cart из reducers\cart.js и id из props самого объекта-книги
const mapStateToProps = ({ cart }, { id }) => ({
    addedCount: cart.items.reduce(
        (count, book) => count + (book.id === id ? 1 : 0),
        0,
    ),
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators( cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);