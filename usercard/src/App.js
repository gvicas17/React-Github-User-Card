import React from 'react'
import './App.css';
import MyCard from './components/MyCard'
import Followers from './components/Followers'
import axios from 'axios'

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      myCard: [],
    }
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/gvicas17')
    .then(res => {
      this.setState({
        myCard:res.data
      })
      console.log(res.data)
    })
    .catch(err => {
      console.log(err, 'no data')
    })
  }

  render(){
  return (
    <div className="App">
      <h1>Gabby's GitHub</h1>
      <MyCard myInfo = {this.state.myCard}/>
      <Followers/>
    </div>
  );
  }
}

export default App;
