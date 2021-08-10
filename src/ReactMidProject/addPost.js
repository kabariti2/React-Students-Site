import React, { Component } from 'react';


class addPost extends Component{
    constructor(props){
        super(props)
        this.state = {newTitle : '' , posts:this.props.posts , newBody : '' }
    }
    addPost = () => {
        let index = this.state.posts.length + 1
        let newPost = {id:index , title:this.state.newTitle,body : this.state.newBody}
        let newPosts = [...this.state.posts , newPost]
        this.props.changePosts(newPosts)
        this.setState({posts:newPosts}) 
        this.props.changeVisibilty(false)
        
    }

    render(){
        return(
            <div>
                New Post - User {this.props.user.id}
                <div style = {{border : "2px solid grey"}}>
                    Title : <input type ="text" onChange ={e => {this.setState({newTitle :e.target.value})}} /> <br />
                    Body : <input type ="text" onChange ={e => {this.setState({newBody:e.target.value})}} /> <br />
                    <input type ="button" value = "Add"   onClick = {this.addPost}  />
                    <input type ="button" value ="Cancel" onClick = {()=>{this.props.changeVisibilty(false)}}  />
                </div>
            </div>
        )
  
    }
}
export default addPost