import request from '../requests'
import { call, put, takeLatest } from 'redux-saga/effects';
import {
    POST_CONTACT,
    receiveContactSuccessAction,
    receiveContactFailureAction,
} from "../actions/contactActions";

export function* watchPostContact() {
    yield takeLatest(POST_CONTACT, callPostContact);
}

function* callPostContact(action) {
    try {
        const response = yield call(request.createContact, action.payload);
        yield put(receiveContactSuccessAction(response.data));
    } catch(error) {
        yield put(receiveContactFailureAction(error));
    }
}

