import * as types from './actionTypes'

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
    return {
        type: types.ASYNC_INIT_TODO
    }
}
