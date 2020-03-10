import * as types from './actionTypes'
import axios from 'axios'
export const changeAction = (value) => {
    return {
        type: types.CHANGE_INPUT_VALUE,
        value
    }
}
export const addAction = () => {
    return {
        type: types.ADD_TODO_ITEM
    }
}

export const deleteAction = (index) => {
    return {
        type: types.DELETE_TODO_ITEM,
        value: index
    }
}

export const initAction = (value) => {
    return {
        type: types.INIT_TODO,
        value: value
    }
}

export const initAsyncAction = () => {
    return (dispatch) => {
        axios.get('http://localhost:1234/init').then((res) => {
            const action = initAction(res.data)
            dispatch(action)
        })
    }
}