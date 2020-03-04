import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filterActions from '../actions/filter';
import Manufacturers from '../components/Manufacturers';


// получаем checkboxManufacturers из reducers\filter.js и переносим в props
const mapStateToProps = ({ filter }) => ({
    checkboxManufacturers: filter.checkboxManufacturers
});


// переносим actions из ../actions/filter.js в props
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterActions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(Manufacturers);