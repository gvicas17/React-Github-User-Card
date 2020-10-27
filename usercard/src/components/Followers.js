import React from 'react'
import axios from 'axios'
import '../App.css'


class Followers extends React.Component{

    constructor(){
        super()
        this.state = {
            myFollowers: []
        }
    }

    componentDidMount(){
        axios.get('https://api.github.com/users/gvicas17/followers')
        .then(res => {
            this.setState({
                myFollowers: res.data
            })
            console.log(res.data)
        })
        .catch(err => {
            console.log(err, 'no follower data')
        })
    }


    render(){
        return(
            <div className = 'cardContainer'>
                {this.state.myFollowers.map((follower) => {
                    return(
                    <div className = 'userCard'>
                    <h2>{follower.name}</h2>
                    <img src = {follower.avatar_url} alt = {follower.name}/>
                    <h4><a href = {follower.html_url}>GitHub Profile</a></h4>
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default Followers