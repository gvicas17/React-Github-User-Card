import React from 'react'
import '../App.css'

class MyCard extends React.Component{
    render(){
        return(
            <div className = "myCard">
                <img src = {this.props.myInfo.avatar_url} alt = {this.props.myInfo.name}/>
                <div className = 'myInfo'>
                <h2>{this.props.myInfo.name}</h2>
                <h4><a href = {this.props.myInfo.html_url}>My GitHub</a></h4>
                <h4>Followers: {this.props.myInfo.followers}</h4>
                <h4>Following: {this.props.myInfo.following}</h4>
                </div>
            </div>
        )
    }
}

export default MyCard