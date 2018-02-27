import { connect } from 'react-redux';
import Provider from './Provider';

const mapStateToProps = (state, ownProps) => ({
    lang: state.lang
});

export default connect(mapStateToProps)(Provider);
