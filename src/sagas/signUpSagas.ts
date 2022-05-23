import {put, call, takeEvery} from 'redux-saga/effects';
import {
    signUpFailure,
    signUpSuccess,
} from '../features/auth/authSlice';

const delay = (ms: number) => new Promise(res => {
    setTimeout(res, ms)
})

export function* signUp() {
    try {
        yield call(delay, 2000)
        const data = {
            name: 'Artem',
            email: 'myEmail@gmail.com',
            password: '3153252523',
        }
        yield put(signUpSuccess(data))
    } catch (error: any) {
        yield put(signUpFailure(error.massage))
    }
}



export function* signUpSaga() {
    yield takeEvery('auth/signUp', signUp)
}