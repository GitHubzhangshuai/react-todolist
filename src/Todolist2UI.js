import React from 'react'
import {Button, Input, List} from 'antd'
import {connect} from 'react-redux'
import { changeAction, addAction, deleteAction } from './store/createActions';

const Todolist2UI = (props)  => {
        return (
            <div style={{marginLeft: '10px',marginTop: '10px'}} >
                <Input style={{width:'300px'}} placeholder="to do list" onChange={props.handleChange} value={props.inputValue}></Input>
                <Button onClick={props.handleBtn}>提交</Button>
                <List
                        size="small"
                        header={<div>Header</div>}
                        footer={<div>Footer</div>}
                        bordered
                        dataSource={props.list}
                        renderItem={(item,index) => <List.Item onClick={() => props.handleDeleteItem(index)}>{item}</List.Item>}
                        />
                </div>
        )
}

const mapStateToProps = (state) => {
        return {
                list: state.list,
                inputValue: state.inputValue
        }
}
const mapDispatchToProps = (dispatch) => {
        return {
                handleDeleteItem(index){
                        const action = deleteAction(index)
                        dispatch(action)
                },
                handleChange(e){
                        const action = changeAction(e.target.value)
                        dispatch(action)
                },
                handleBtn(){
                        const action = addAction()
                        dispatch(action)
                }
        }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todolist2UI)