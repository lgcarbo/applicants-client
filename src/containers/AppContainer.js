import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state, ownProps) => {
    return { showMainPage: (state.page.selectedApplicantId === -1) };
};

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(App);