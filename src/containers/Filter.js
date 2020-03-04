import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as filterActions from '../actions/filter';
import Filter from '../components/Filter';

// ??? почему books
// получаем filterBy из reducers\filter.js и переносим в props
const mapStateToProps = ({ filter }) => ({
    filterBy: filter.filterBy
});


// переносим action(setFilter) из ../actions/filter.js в props
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(filterActions, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(Filter);