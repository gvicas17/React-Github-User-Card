import React from 'react';
import './App.css';
import UserCard from './components/UserCard'

class App extends React.Component {

  state = {
    name: "",
    username: "",
    image: "",
    location: ""
  }

  componentDidMount() {
  this.gvicas(this.state.myInfo)
  }

  gvicas = () => {
    fetch(`https://api.github.com/users/gvicas17`)
    .then((res)=> res.json())
    .then((data)=> {
      this.setState({
        username: data.login,
        image: data.avatar_url,
        name: data.name,
        location: data.location
      })
    })
    .catch((err)=> console.log("error", err))
  }
  render(){
  return (
  <div>
     <h1>GitHub Users</h1>
     <div>
       <UserCard 
        name={this.state.name}
        username = {this.state.username}
        location = {this.state.location}
        image = {this.state.image}
        />

     </div>
  </div>
  );
  }
}

export default App;
