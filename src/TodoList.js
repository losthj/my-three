import React, { Component } from 'react';
import store from './store/index';
// import {getInputChangeAction,getAddItemAction,getDeleteItemAction,initListAction,getTodoList} from './store/actionCreators'
import {getInputChangeAction,getAddItemAction,getDeleteItemAction,getTodoList} from './store/actionCreators'
// import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './store/actionTypes'
import TodoListUI from './TodoListUI'
// import axios from 'axios'


// const data = [
//     'Racing car sprays burning fuel into crowd.',
//     'Japanese princess to wed commoner.',
//     'Australian walks 100km after outback crash.',
//     'Man charged over missing wedding girl.',
//     'Los Angeles battles huge wildfires.',
//   ];

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
      //  console.log(this.state)
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete= this.handleItemDelete.bind(this)
        store.subscribe(this.handleStoreChange);
    }
    

    render() {
        return (
           <TodoListUI 
           inputValue ={this.state.inputValue} 
           list={this.state.list}
           handleInputChange ={this.handleInputChange}
           handleBtnClick ={this.handleBtnClick}
           handleItemDelete ={this.handleItemDelete}
           />
        );
    }

    handleInputChange(e){
        // const action = {
        //     type:CHANGE_INPUT_VALUE,
        //     value:e.target.value
        // }
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action);
    }

    componentDidMount(){
        // axios.get('/list.json').then((res) =>{
        //     const data = res.data;
        //     const action = initListAction(data)
        //     store.dispatch(action);
        // })
        const action = getTodoList();
        store.dispatch(action);
        console.log(action)
    }

    handleStoreChange(){
        this.setState(store.getState());
    }

    handleBtnClick(){
        // const action = {
        //     type:ADD_TODO_ITEM
        // }
        const action = getAddItemAction();
        store.dispatch(action)
    }
    handleItemDelete(index){
        // const action ={
        //     type:DELETE_TODO_ITEM,
        //     index
        // }
        const action = getDeleteItemAction(index);
        store.dispatch(action)
    }
}

export default TodoList;