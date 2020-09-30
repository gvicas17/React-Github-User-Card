import React from 'react';
import './App.css';
import UserCard from './components/UserCard'
import FollowerData from './components/FollowerData'

class App extends React.Component {

  state = {
    name: "",
    username: "",
    image: "",
    location: "",
    followerInfo: []
  }

  componentDidMount() {
    Promise.all ([
    fetch(`https://api.github.com/users/gvicas17`),
    fetch(`https://api.github.com/users/gvicas17/followers`)
    ])

    .then(([res1, res2])=> Promise.all ([res1.json(), res2.json()]))
    .then((data)=> {
      this.setState({
        username: data[0].login,
        image: data[0].avatar_url,
        name: data[0].name,
        location: data[0].location,
        followerInfo: data[1]
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
        <FollowerData data={this.state.followerInfo}/>

     </div>
  </div>
  );
  }
}

export default App;
