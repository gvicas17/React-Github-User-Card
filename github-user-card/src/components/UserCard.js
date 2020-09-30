import React from 'react'

const UserCard = props => {
  return(
      <div className = "cardContainer">
      <h2>{props.name}</h2>
      <img src = {props.image} alt = "Gabby"/>
      <h3>{props.username}</h3>
      <h3>{props.location}</h3>
      <h3><a href= 'https://github.com/gvicas17'>Follow Me</a></h3>
      </div>
  )
}

export default UserCard