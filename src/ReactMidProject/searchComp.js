import React, { Component } from 'react'
class SearchComp extends Component {
    constructor(props){
        super(props)
        this.state = {users : [],newUsers:[]}
    }

    search = (e)=> {
        let name = e.target.value.toLowerCase(); 
        let email = e.target.value.toLowerCase();
        let data = this.props.users.filter(user => (user.name.toLowerCase().includes(name) || user.email.toLowerCase().includes(email)))
        this.props.updateUsers(data);
            }

    render(){
        return(
            
                
            <div>
                Search <input type = "text" onChange ={this.search} />

            </div>

        )
    }
}
export default SearchComp;