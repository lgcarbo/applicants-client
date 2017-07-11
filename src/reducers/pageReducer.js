import { ACTIONS } from '../actions/pageActions'

const initialState = {
    selectedApplicantId: -1,
    selectedPage: 1,
    isEditing: false,
    isCreating: false,
    isDeleting: false,
    errorMessage: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ACTIONS.CREATE_NEW_APPLICANT:
            return Object.assign({}, state, { isCreating: true });
        case ACTIONS.ASK_IF_DELETE_APPLICANT:
            return Object.assign({}, state, { isDeleting: true, selectedApplicantId: action.applicantId });
        case ACTIONS.APPLICANT_DELETED:
            return Object.assign({}, state, { isDeleting: false, selectedApplicantId: -1 });
        case ACTIONS.EDIT_APPLICANT:
            return Object.assign({}, state, { isEditing:true, selectedApplicantId: action.applicantId });
        case ACTIONS.APPLICANT_SAVED:
            return Object.assign({}, state, { isEditing: false, isCreating: false, selectedApplicantId: -1, selectedPage: 1 });
        case ACTIONS.CANCEL_APPLICANT:
            return Object.assign({}, state, { isEditing: false, isCreating: false, isDeleting: false, selectedApplicantId: -1 });
        case ACTIONS.CHANGE_PAGE:
            return Object.assign({}, state, { selectedPage: action.page });
        case ACTIONS.SHOW_ERROR_MESSAGE:
            return Object.assign({}, state, { errorMessage: action.message });
        case ACTIONS.HIDE_ERROR_MESSAGE:
            return Object.assign({}, state, { errorMessage: '' });
        default:
            return state;
    }
}
