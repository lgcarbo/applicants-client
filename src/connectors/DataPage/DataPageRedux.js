import { connect } from 'react-redux';
import { applicantSaved, cancelApplicant } from 'actions/pageActions';

const mapStateToProps = (state) => {
    return { ApplicantId: state.page.selectedApplicantId }
};

const mapDispatchToProp = (dispatch) => {
    return { 
        endSaveApplicant: (applicantId) => dispatch(applicantSaved(applicantId)),
        cancelApplicant: () => dispatch(cancelApplicant()) 
    }
};

export default connect(mapStateToProps, mapDispatchToProp);