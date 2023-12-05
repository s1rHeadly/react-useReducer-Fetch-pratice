import React from 'react'

const Item = ({info}) => {
 
  const {name, email, picture} = info;
  const image = picture?.large
  const {first, last, title} = name

  return (
    <div>
    <h3>{`${title} ${first} ${last}`}</h3>
    <p>{email}</p>
      <img src={image} alt={first} />
    </div>
  )
}

export default Item