export const ACTIONS = {
    CREATE_NEW_APPLICANT: 'CREATE_NEW_APPLICANT',
    APPLICANT_DELETED: 'APPLICANT_DELETED',
    ASK_IF_DELETE_APPLICANT: 'ASK_IF_DELETE_APPLICANT',
    EDIT_APPLICANT: 'EDIT_APPLICANT',
    CANCEL_APPLICANT: 'CANCEL_APPLICANT',
    APPLICANT_SAVED: 'APPLICANT_SAVED',
    CHANGE_PAGE: 'CHANGE_PAGE',
    SHOW_ERROR_MESSAGE: 'SHOW_ERROR_MESSAGE',
    HIDE_ERROR_MESSAGE: 'HIDE_ERROR_MESSAGE',

    GO_TO_PAGE: 'GO_TO_PAGE'
}

export function createNewApplicant() {
    return { type: ACTIONS.CREATE_NEW_APPLICANT };
}

export function askIfDeleteApplicant(applicantId) {
    return { type: ACTIONS.ASK_IF_DELETE_APPLICANT, applicantId };
}

export function applicantDeleted(applicantId) {
    return { type: ACTIONS.APPLICANT_DELETED, applicantId };
}

export function editApplicant(applicantId) {
    return { type: ACTIONS.EDIT_APPLICANT, applicantId };
}

export function applicantSaved(applicantId) {
    return { type: ACTIONS.APPLICANT_SAVED, applicantId };
}

export function cancelApplicant() {
    return { type: ACTIONS.CANCEL_APPLICANT };
}

export function changePage(page, refetch) {
    return { type: ACTIONS.CHANGE_PAGE, page };
}

export function showErrorMessage(message) {
    return { type: ACTIONS.SHOW_ERROR_MESSAGE, message };
}

export function hideErrorMessage(message) {
    return { type: ACTIONS.HIDE_ERROR_MESSAGE };
}