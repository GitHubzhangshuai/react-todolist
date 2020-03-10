import 'antd/dist/antd.css';
import React, {Component} from 'react'
import store from './store'
import Todolist2UI from './Todolist2UI'
import {Provider} from 'react-redux'
import {initAsyncAction} from './store/createActions'

class Todolist2 extends Component {

    componentWillMount(){
        const action = initAsyncAction()
        store.dispatch(action)
    }
    render(){
        return (
            <Provider store={store}>
            <Todolist2UI></Todolist2UI>
            </Provider>
        )
    }
}

export default Todolist2