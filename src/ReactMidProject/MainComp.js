import React , {Component} from 'react';
import Utils from './Utils'
import UserCardComp from './userCardComp';
import SearchComp from './searchComp'
import UserContext from './UserContext';
import AddUserComp from './addUserComp'
class mainComp extends Component {  
    constructor(props){
        super(props)
        this.state = {users: [],searchUsers : [] , clickAdd : false}
    }
     async componentDidMount(){
         let users = await Utils.getUserAllData()
         console.log(users);
         this.setState({users:users,searchUsers:users})
     }
 



    render(){
        let addUser
        if (this.state.clickAdd){
            addUser = <AddUserComp newUsers = {data => {this.setState({searchUsers:data , users:data})}} users = {this.state.users} changeVisibilty = {data => {this.setState({clickAdd:data})}} />
        }else if (this.state.clickAdd === false){
            addUser = null
        }
        let usersToRender = this.state.searchUsers.map(user => {
        return(<UserCardComp key ={user.id} user={user} updatedUser = {(data)=>{
            let allUsers = this.state.users;
            let i = allUsers.findIndex(user => user.id === data.id)
            allUsers[i]=data;
            this.setState({users:allUsers, searchUsers:allUsers})
        }} 
        deletedUser = {(data) => {
            let allUsers = this.state.users;
            let i = allUsers.findIndex(user => user.id === data.id)
            allUsers.splice(i,1)
            this.setState({users:allUsers,searchUsers:allUsers})
        }} />)
        })
        return(
             
            <div style = {{border : "3px solid grey"}}>
                <SearchComp users = {this.state.users} updateUsers = {(data)=>{this.setState({searchUsers : data})}} />  
                {addUser}
                <input type ="button" value = "Add" onClick = {()=>{this.setState({clickAdd:true})}} />
                {usersToRender}
                
                
                
            </div>
        )
    }
}
export default mainComp