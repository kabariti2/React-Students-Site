import React, { Component } from 'react';
import TodosData from './todosData';
import AddTodo from './addTodo'

class TodosComp extends Component{
    constructor(props){
        super(props)
        this.state = {user:this.props.user ,click : false, todos : this.props.user.todos}
    }
    componentDidUpdate(propsState,prevState){
        if(prevState.todos != this.state.todos){
            let updatedUser = this.state.user;
            updatedUser.todos = this.state.todos
            this.props.updateUser(updatedUser)
        }
         
    }


    render(){
        let addTodo
       let dataToRender = this.state.user.todos.map(todo =>{
            return(<TodosData todos = {this.state.todos} todo = {todo} updateTodos = {(data)=>{this.setState({todos:data})}} />)
        }) 
        if (this.state.click) {
            addTodo = <AddTodo changeTodos = {data =>{this.setState({todos:data})}} todos = {this.props.user.todos} user = {this.state.user} changeVisibilty = {(data)=>{this.setState({click:data})}}  /> 
            dataToRender = null
        }else if (this.state.click===false){
            addTodo = null
        }
        return(
            <div >
                <h4> Todos - User {this.props.user.id} </h4>
                <input type ="button" value="Add" onClick = {() => {this.setState({click : true})}} />
                {addTodo}
                <div style = {{border : "2px solid black"}}>
                    {dataToRender}
                </div>
                
            </div>
        )
    }
}
export default TodosComp