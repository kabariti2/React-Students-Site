import React, { Component } from 'react'

class OtherDataComp extends Component{
    constructor(props){
        super(props)
    }


    render(){
        
        return(
            <div style = {{border : "1px solid grey" , }}>
                Street : <input type = "text" value = {this.props.otherData.street} /> <br />
                City : <input type = "text" value = {this.props.otherData.city} /><br />
                Zip : <input type ="text" value = {this.props.otherData.zipcode} />

            </div>
        )
    }
}

export default OtherDataComp