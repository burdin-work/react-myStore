import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filterActions from '../actions/filter';
import Manufacturers from '../components/Manufacturers';


const mapStateToProps = ({ filter }) => ({
    checkboxManufacturers: filter.checkboxManufacturers
});


const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterActions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(Manufacturers);