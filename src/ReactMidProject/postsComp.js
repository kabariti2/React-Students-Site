import React, { Component } from 'react';
import AddPost from './addPost'
import PostsData from './postsData'

class PostsComp extends Component{
    constructor(props){
        super(props)
        this.state = {user:this.props.user , posts:this.props.user.posts , click : false}
    }
    componentDidUpdate(propsState,prevState){
        if(prevState.posts != this.state.posts){
            let updatedUser = this.state.user;
            updatedUser.posts = this.state.posts
            this.props.updateUser(updatedUser)
        }
         
    }


    render(){
        let addPost
       let dataToRender = this.state.user.posts.map(post =>{
            return(<PostsData post = {post} />)
        }) 
        if (this.state.click) {
            addPost = <AddPost changePosts = {data =>{this.setState({posts:data})}} posts = {this.props.user.posts} user = {this.state.user} changeVisibilty = {(data)=>{this.setState({click:data})}}  /> 
            dataToRender = null
        }else if (this.state.click===false){
            addPost = null
        }
        return(
            <div >
                <h4> Posts - User {this.props.user.id} </h4>
                <input type ="button" value="Add" onClick = {() => {this.setState({click : true})}} />
                {addPost}
                <div style = {{border : "2px solid black"}}>
                    {dataToRender}
                </div>
                
            </div>
        )
    }
}
export default PostsComp