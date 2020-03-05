import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions  from '../actions/cart';
import * as itemsActions  from '../actions/goods';
import Card from '../components/Card';

// получаем cart из reducers\cart.js и id из props самого объекта-книги
const mapStateToProps = (story, ownProps) => {


    return {
        addedCount: story.cart.items.reduce(
            (count, i) => count + (i.id === ownProps.id ? 1 : 0),
            0,
        ),
        ownProps: ownProps
    };
}

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators( cartActions, dispatch),
    ...bindActionCreators( itemsActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);