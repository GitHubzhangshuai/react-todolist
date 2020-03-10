import React, {Component,Fragment} from 'react'
import Todoitem from './Todoitem'
import './style.css'
import store from './store'

class Todolist extends Component {

    constructor(props){
        super(props)
        this.state = {
            inputValue: 'hello',
            list: ['A','B']
        }
    }
    componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true
    }
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    render(){
        console.log('render')
        return (
            <Fragment>
            <div>
                <label htmlFor="insertData">请输入</label>
                <input id="insertData" ref={(input) => this.input=input} className='input' value={this.state.inputValue} onChange={this.changeHandle.bind(this)}/>
                <button onClick={this.handleBtn.bind(this)}>提交</button>
            </div>
            <ul>
                {
                    this.getItem()
                }
            </ul>
            </Fragment>
        )
    }
    getItem(){
        return this.state.list.map((el,index) => {return (
            <Todoitem 
            key={index}
            index={index} 
            content={el} 
            handleDelete={this.handleDeleteItem.bind(this)}
            />
        )
    })
    }
    changeHandle(e){
        // const value = e.target.value
        const value = this.input.value
        this.setState(() => ({
            inputValue:value
        }))
        console.log(e.target)
    }
    handleBtn(){
        this.setState((preState) => ({
            'list': [...preState.list,this.state.inputValue]
        }))
    }
    handleDeleteItem(index){
        this.setState((preState) => {
            const list = [...preState.list]
            list.splice(index,1)
            return {list}
        })
    }
}

export default Todolist