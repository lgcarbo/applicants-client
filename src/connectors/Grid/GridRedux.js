import { connect } from 'react-redux';
import { editApplicant, askIfDeleteApplicant, changePage } from 'actions/pageActions';

const mapStateToProps = (state) => {
    return { page: state.page.selectedPage };
}

const mapDispatchToProps = (dispatch) => {
    return { 
        changePage: (page, refetch) => dispatch(changePage(page)),
        editApplicant: (applicantId) => dispatch(editApplicant(applicantId)),
        askIfDeleteApplicant: (applicantId) => dispatch(askIfDeleteApplicant(applicantId))
    };
}

export default connect (mapStateToProps, mapDispatchToProps);