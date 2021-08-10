import React, { Component } from 'react'



class AddUserComp extends Component {
    constructor(props){
        super(props)
        this.state = {name:'', email : '' ,users:this.props.users}
    }
    addUser = () => {
        let i = this.state.users.length + 1
        let newUser = {id:i,name:this.state.name,email:this.state.email,address:{
            street:'' ,
            city:'',
            zipcode:''
        },
        todos:[],
        posts:[]
    }
    let newUsers = this.state.users
    newUsers = [...newUsers,newUser]
    this.props.newUsers(newUsers)
    this.props.changeVisibilty(false)

    }


    render(){
        return(
            
            <div>
                Add New User 
                <div style = {{border : "2px solid grey"}}>
                    Name : <input type ="text" onChange = {e => {this.setState({name:e.target.value})}} /><br />
                    Email : <input type ="text" onChange = {e => {this.setState({email:e.target.value})}} /><br />
                    <input type ="button" value = "Add"   onClick = {this.addUser}  />
                    <input type ="button" value ="Cancel"  onClick = {()=>{this.props.changeVisibilty(false)}}  />

                </div>

            </div>
        )
    }
}
export default AddUserComp