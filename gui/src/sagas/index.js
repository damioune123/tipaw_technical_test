import { all, call } from 'redux-saga/effects';
import { watchPostContact } from './contactSaga';

export default function* rootSaga() {
    yield all([
        call(watchPostContact)
    ]);
}