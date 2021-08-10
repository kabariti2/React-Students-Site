import React, { Component } from "react"


class PostsData extends Component{ 
    constructor(props){
        super(props)
        this.state={post:this.props.post}
    }

    render(){
        return(
            <div style = {{border : "1px solid #05eeee"}}>
                Title : {this.state.post.title}<br />
                Body : {this.state.post.body}
            </div>
        )
    }
}
export default PostsData    