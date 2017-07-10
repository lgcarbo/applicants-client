import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return { ApplicantId: state.page.selectedApplicantId }
};

export default connect(mapStateToProps);