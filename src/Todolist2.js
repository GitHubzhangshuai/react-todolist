import 'antd/dist/antd.css';
import React, {Component} from 'react'
import store from './store'
import { changeAction, addAction, deleteAction, initAsyncAction } from './store/createActions';
import Todolist2UI from './Todolist2UI'

class Todolist2 extends Component {
    constructor(props){
        super(props)
        console.log(store.getState())
        this.state = store.getState()
        this.handleChange = this.handleChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtn = this.handleBtn.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    componentWillMount(){
        const action = initAsyncAction()
        store.dispatch(action)
    }
    render(){
        return (
            <Todolist2UI state={this.state} handleBtn={this.handleBtn} handleChange={this.handleChange} handleDeleteItem={this.handleDeleteItem}></Todolist2UI>
        )
    }
    handleChange(e){
        const action = changeAction(e.target.value)
        store.dispatch(action)
    }
    handleBtn(){
        const action = addAction()
        store.dispatch(action)
    }
    handleDeleteItem(index){
        const action = deleteAction(index)
        store.dispatch(action)
    }
    handleStoreChange(){
        this.setState(store.getState())
    }
}

export default Todolist2