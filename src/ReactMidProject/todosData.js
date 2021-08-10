import React, { Component } from "react"


class TodosData extends Component{ 
    constructor(props){
        super(props)
        this.state={todo:this.props.todo,completed : this.props.todo.completed , todos:this.props.todos}
    }
    taskCompleted = () => {
        this.setState(prevState =>({completed :!prevState.completed}))
        let updatedTodo = this.state.todo
        updatedTodo.completed = true; 
        let updatedTodos = this.state.todos
        let i = updatedTodos.findIndex(todo => todo.id === updatedTodo.id)
        updatedTodos[i] = updatedTodo
        this.setState({todos:updatedTodos})
        this.props.updateTodos(this.state.todos)

    }
    render(){
        let taskCompleted;
        if (this.state.completed == false){
            taskCompleted = <input onClick = {this.taskCompleted} type ="button" value="Task Completed"  />
        }
        console.log(this.state.todo.title);
        return(
            <div style = {{border : "1px solid #05eeee"}}>
                Title : {this.state.todo.title}<br />
                Completed :{`${this.state.completed}`} <br />
                {taskCompleted}
            </div>
        )
    }
}
export default TodosData    