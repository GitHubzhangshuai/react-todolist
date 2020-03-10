import React from 'react'
import {Button, Input, List} from 'antd'

const Todolist2UI = (props)  => {
        return (
            <div style={{marginLeft: '10px',marginTop: '10px'}}>
            <Input style={{width:'300px'}} placeholder="to do list" onChange={props.handleChange} value={props.state.inputValue}></Input>
            <Button onClick={props.handleBtn}>提交</Button>
            <List
  size="small"
  header={<div>Header</div>}
  footer={<div>Footer</div>}
  bordered
  dataSource={props.state.list}
  renderItem={(item,index) => <List.Item onClick={() => props.handleDeleteItem(index)}>{item}</List.Item>}
/>
        </div>
        )
}

export default Todolist2UI