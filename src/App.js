import React, { Component } from 'react'
import './App.css';
import MainComp from './ReactMidProject/MainComp'


class App extends Component {
  constructor(){
    super()
  }
  render(){
    return (
    <div style = {{backgroundImage : ""}} className="App" style = {{border : "10px solid black"}}>
      <MainComp />
    </div>
    )
  }
}
export default App