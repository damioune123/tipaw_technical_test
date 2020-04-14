import requests from '../requests/index';
export function postContact(contact) {
    return dispatch => {
        dispatch(postContactBegin());
        return requests.createContact(contact)
            .then(json => {
                dispatch(postContactSuccess(json.data));
            })
            .catch(error =>{
                    console.log('error', error)
                    dispatch(postContactFailure(error))
            });
    };
}

export const POST_CONTACT_BEGIN = "POST_CONTACT_BEGIN";
export const POST_CONTACT_SUCCESS = "POST_CONTACT_SUCCESS";
export const POST_CONTACT_FAILURE = "POST_CONTACT_FAILURE";

export const postContactBegin = () => ({
    type: POST_CONTACT_BEGIN,
});

export const postContactSuccess = contact => ({
    type: POST_CONTACT_SUCCESS,
    payload: { contact }
});

export const postContactFailure = error => ({
    type: POST_CONTACT_FAILURE,
    payload: { error }
});
