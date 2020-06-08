import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartActions  from '../actions/cart';
import * as itemsActions  from '../actions/goods';
import Card from '../components/Card';

// get cart from reducers\cart.js and id from props object itself
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