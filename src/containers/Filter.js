import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filterActions from '../actions/filter';
import Filter from '../components/Filter';

// get filterBy from reducers\filter.js and transfer to props
const mapStateToProps = ({ filter }) => ({
    filterBy: filter.filterBy
});


// transfer action(setFilter) from ../actions/filter.js to props
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterActions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(Filter);