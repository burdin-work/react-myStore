import {connect} from 'react-redux';
import Checkout from '../components/Checkout';

const mapStateToProps = ({cart}) => ({
    items: cart.items
});

export default connect(mapStateToProps)(Checkout);