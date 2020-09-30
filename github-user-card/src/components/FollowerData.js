import React from 'react'


 const FollowerData = props => {

    return(
        <div className = "followerContainer">
        {props.data.map (data =>
            <div className = "followerCards">
            <h2>{data.login}</h2>
            <div className = "imageContainer">
            <img className = "followerImage" src = {data.avatar_url} alt = {data.login}/>
            </div>
            </div>
            )}

        </div>
    )
 }
export default FollowerData