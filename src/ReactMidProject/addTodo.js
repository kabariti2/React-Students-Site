import React, { Component } from 'react';


class addTodo extends Component{
    constructor(props){
        super(props)
        this.state = {newTask : '' , todos:this.props.todos }
    }
    addTodo = () => {
        let index = this.state.todos.length + 1
        let newTodo = {id:index , title:this.state.newTask,completed:false}
        let newTodos = [...this.state.todos , newTodo]
        this.props.changeTodos(newTodos)
        this.setState({todos:newTodos}) 
        this.props.changeVisibilty(false)
        
    }

    render(){
        return(
            <div>
                New Todo - User {this.props.user.id}
                <div style = {{border : "2px solid grey"}}>
                    Title : <input type ="text" onChange ={e => {this.setState({newTask:e.target.value})}} /> <br />
                    <input type ="button" value = "Add"  onClick = {this.addTodo}  />
                    <input type ="button" value ="Cancel"  onClick = {()=>{this.props.changeVisibilty(false)}}  />
                </div>
            </div>
        )
  
    }
}
export default addTodo