import React, {Component} from 'react'
import propTypes from 'prop-types'
class Todoitem extends Component{
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }
    componentWillMount(){
        console.log('child componentWillMount')
    }
    componentDidMount(){
        console.log('child componentDidMount')
    }
    componentWillReceiveProps(){
        console.log('child componentWillReceiveProps')
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('child shouldComponentUpdate')
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
    }
    componentWillUpdate(){
        console.log('child componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('child componentDidUpdate')
    }
    render(){
        console.log('child render')
        const {test,content} = this.props
        return (
        <li onClick={this.handleDelete}>{test}-{content}</li>
        )
    }
    handleDelete(){
        this.props.handleDelete(this.props.index)
    }
}
Todoitem.propTypes = {
    test: propTypes.string.isRequired,
    content: propTypes.oneOfType([propTypes.number,propTypes.string]),
    index: propTypes.number,
    handleDelete: propTypes.func
}

Todoitem.defaultProps = {
    test: 'hello'
}
export default Todoitem