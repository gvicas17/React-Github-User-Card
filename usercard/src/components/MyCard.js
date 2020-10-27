import React from 'react'

class MyCard extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.myInfo.name}</h2>
                <img src = {this.props.myInfo.avatar_url} alt = {this.props.myInfo.name}/>
                <h4>My GitHub:</h4> <h4>{this.props.myInfo.url}</h4>
                <h4>Followers:</h4> <h4> {this.props.myInfo.followers}</h4>
                <h4>Following:</h4> <h4>{this.props.myInfo.following}</h4>
            </div>
        )
    }
}

export default MyCard