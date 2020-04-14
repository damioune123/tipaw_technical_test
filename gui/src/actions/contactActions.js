export const POST_CONTACT = "POST_CONTACT";
export const POST_CONTACT_SUCCESS = "POST_CONTACT_SUCCESS";
export const POST_CONTACT_FAILURE = "POST_CONTACT_FAILURE";

export function postContactAction(values) {
    return {
        type: POST_CONTACT,
        payload: values
    }
}
export function receiveContactSuccessAction(contact) {
    return {
        type: POST_CONTACT_SUCCESS,
        payload: { contact }
    }
}
export function receiveContactFailureAction(error) {
    return {
        type: POST_CONTACT_FAILURE,
        payload: { error }
    }
}