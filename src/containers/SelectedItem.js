import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as cartActions from '../actions/cart';
import * as itemsActions from "../actions/goods";
import SelectedItem from '../components/SelectedItem';


const mapStateToProps = (story, ownProps) => {

    const selectedItem = story.goods.items && story.goods.items.filter(item => item.title === ownProps.match.params.id)[0];

    if (selectedItem) {
        return {
            selectedItem: selectedItem,
            items: story.goods.items,
            addedCount: story.cart.items.reduce(
                (count, i) => count + (i.id === selectedItem.id ? 1 : 0),
                0,
            )
        }
    }
};

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch),
    ...bindActionCreators(itemsActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedItem);