import React, { Component } from 'react'
import Utils from './Utils'
import OtherDataComp from './otherDataComp'
import TodosComp from './todosComp'
import PostsComp from './postsComp'
class UserCardComp extends Component {
    constructor(props){
        super(props)
        this.state = {otherData : [] , display : true , user : this.props.user  , click : false}
    }

    showTodosAndPosts = () => {
        this.setState(prevState => ({click:!prevState.click}))

    }
    changeNameValue = (e) => {
        let newUser =this.state.user;
        newUser.name = e.target.value;
        this.setState({user : newUser})

    }
    changeEmailValue = (e) => {
        let newUser =this.state.user;
        newUser.email = e.target.value;
        this.setState({user : newUser})

    }
    updateUser = () => {
        this.props.updatedUser(this.state.user)
    }
    deleteUser = () => {
        this.props.deletedUser(this.state.user)
    }

    showOtherData = () => {
        this.setState({otherData : this.props.user.address})
        this.setState({display : false})
        
    
    }
    unShowData = () => {
        this.setState({display:true})
    }
    render(){
        let showPosts;
        let showTodos;
        let isOrange;
        if(this.state.click === true){
            isOrange = "#7C7575"
            showTodos = <TodosComp updateUser = {(data)=>{this.setState({user:data})}} user = {this.state.user} />
            showPosts = <PostsComp updateUser = {(data)=>{this.setState({user:data})}} user = {this.state.user} />
        }else {
            isOrange = ""
            showTodos = ""
            showPosts = ""
        }
        let dataToRender;
        if (this.state.display === false){
         dataToRender=<OtherDataComp otherData = {this.state.otherData} />
        }else{
            dataToRender = ""
        }
        return(
            <div>
            {showTodos} 
            {showPosts}

            <div style = {{border : "1px solid grey" , backgroundColor:isOrange}}>   
                ID :<label onClick ={this.showTodosAndPosts} >{this.props.user.id}<br /></label> 
                Name <input type = "text" value = {this.props.user.name} onChange = {this.changeNameValue} /><br />
                Email <input type = "text" value = {this.props.user.email} onChange = {this.changeEmailValue} /><br />
                <input type ="button" value ="Other Data" style = {{backgroundColor : "grey"}} onMouseOver = {this.showOtherData} onClick ={this.unShowData} /><br />
                <input type ="button" value ="Update" onClick = {this.updateUser} />
                <input type ="button" value ="Delete" onClick = {this.deleteUser} />
                {dataToRender}
                




            </div>
            </div>
        )
    }
}
export default UserCardComp