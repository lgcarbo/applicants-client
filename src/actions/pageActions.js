export const ACTIONS = {
    CREATE_NEW_APPLICANT: 'CREATE_NEW_APPLICANT',
    DELETE_APPLICANT: 'DELETE_APPLICANT',
    EDIT_APPLICANT: 'EDIT_APPLICANT',
    CANCEL_APPLICANT: 'CANCEL_APPLICANT',
    SAVE_APPLICANT: 'SAVE_APPLICANT',
    GO_TO_PAGE: 'GO_TO_PAGE'
}

export function createNewApplicant() {
    return { type: ACTIONS.CREATE_NEW_APPLICANT };
}

export function deleteApplicant(applicantId) {
    return { type: ACTIONS.DELETE_APPLICANT, applicantId };
}

export function editApplicant(applicantId) {
    return { type: ACTIONS.EDIT_APPLICANT, applicantId };
}

export function saveApplicant(applicantId) {
    return { type: ACTIONS.SAVE_APPLICANT, applicantId };
}

export function cancelApplicant() {
    return { type: ACTIONS.CANCEL_APPLICANT };
}