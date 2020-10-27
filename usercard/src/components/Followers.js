import React from 'react'
import axios from 'axios'


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
        })
        .catch(err => {
            console.log(err, 'no follower data')
        })
    }


    render(){
        return(
            <div>
                {this.state.myFollowers.map((follower) => {
                    return(
                    <div>
                    <h2>{follower.name}</h2>
                    <img src = {follower.avatar_url} alt = {follower.name}/>
                    <h4>GitHub Profile:</h4> <h4>{follower.url}</h4>
                    <h4>Followers:</h4> <h4> {follower.followers}</h4>
                    <h4>Following:</h4> <h4>{follower.following}</h4>
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default Followers