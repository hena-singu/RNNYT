import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { searchNews } from '../actions/newsActions';
import { searchNewsSelector } from '../selectors/newsSelectors';
import Search from '../components/Search';

const mapStateToProps = state => {
    console.log('==========================');
    console.log(state);
    return ({
        filteredNews: searchNewsSelector(state)
    })
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ searchNews }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Search);