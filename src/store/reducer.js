import * as types from './actionTypes'
const defaultState = {
    'inputValue': 'hello',
    'list': ['1','2']
}
export default (state=defaultState,action) => {
    if(action.type === types.INIT_TODO){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.value
        return newState
    }
    if(action.type === types.CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === types.ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        return newState
    }
    if(action.type === types.DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value,1)
        return newState
    }
    return state
} 