import {
    POST_CONTACT_SUCCESS,
    POST_CONTACT_FAILURE
} from "../actions/contactActions";

const initialState = {
    contact: null,
    loading: false,
    error: null
};

export default function contactReducer(
    state = initialState,
    action
) {
    switch (action.type) {
        case POST_CONTACT_SUCCESS:
            return {
                ...state,
                loading: false,
                contact: action.payload.contact
            };

        case POST_CONTACT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                contact: null
            };

        default:
            return state;
    }
}
