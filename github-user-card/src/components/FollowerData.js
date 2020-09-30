import React from 'react'


 const FollowerData = props => {

    return(
        <div>
        {props.data.map (data =>
            <div className = "followerContainer">
            <h2>{data.login}</h2>
            <img src = {data.avatar_url} alt = {data.login}/>
            </div>
            )}

        </div>
    )
 }
export default FollowerData