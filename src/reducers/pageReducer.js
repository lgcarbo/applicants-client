import { ACTIONS } from '../actions/pageActions'

const initialState = {
    selectedApplicantId: -1,
    selectedPage: 1,
    isEditing: false,
    isCreating: false,
    isDeleting: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ACTIONS.CREATE_NEW_APPLICANT:
            return Object.assign({}, state, { isCreating: true });
        case ACTIONS.DELETE_APPLICANT:
            return Object.assign({}, state, { isDeleting: true, selectedApplicantId: action.applicantId });
        case ACTIONS.EDIT_APPLICANT:
            return Object.assign({}, state, { isEditing:true, selectedApplicantId: action.applicantId });
        case ACTIONS.SAVE_APPLICANT:
            return Object.assign({}, state, { isEditing: false, isCreating: false, selectedApplicantId: -1 });
        case ACTIONS.CANCEL_APPLICANT:
            return Object.assign({}, state, { isEditing: false, isCreating: false, selectedApplicantId: -1 });
        default:
            return state;
    }
}
