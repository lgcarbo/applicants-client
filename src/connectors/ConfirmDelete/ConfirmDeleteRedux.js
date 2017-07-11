import { connect } from 'react-redux';
import { cancelApplicant, applicantDeleted, showErrorMessage } from 'actions/pageActions';

const mapStateToProps = (state) => {
    return { show: state.page.isDeleting, applicantId: state.page.selectedApplicantId };
};

const mapDispatchToProps = (dispatch) => {
    return { 
        cancelApplicant: () => dispatch(cancelApplicant()),
        endDeleteApplicant: (applicantId, deleted) => {
            if(deleted) { 
                dispatch(applicantDeleted(applicantId));
            }
            else {
                dispatch(showErrorMessage('Error when trying to delete Applicant.'));
                dispatch(cancelApplicant());
            }
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)