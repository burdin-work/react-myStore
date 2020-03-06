import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filterActions from '../actions/filter';
import MoreGoods from '../components/MoreGoods';


const mapStateToProps = ({ filter, goods }) => ({
    numDisplays: filter.numDisplays,
    goodsLength: goods.items ? goods.items.length : 0
});


const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterActions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(MoreGoods);