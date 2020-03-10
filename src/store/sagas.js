import {takeEvery,put} from 'redux-saga/effects'
import * as types from './actionTypes'
import axios from 'axios'
import {initAction} from './createActions'

function* getInitList(){
    const res = yield axios.get('http://localhost:1234/init')
    const action = initAction(res.data)
    yield put(action)
}

function* sagas(){
    yield takeEvery(types.ASYNC_INIT_TODO,getInitList)
}

export default sagas