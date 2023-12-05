import React from 'react'

const Item = ({info}) => {
  console.log(info)
  const {name, email, phone, dob, picture} = info;

  const image = picture?.large
  const {first, last, title} = name

  return (
    <div>
    <h3>{`${first} ${last}`}</h3>
    <p>{email}</p>
      <img src={image} alt={first} />
    </div>
  )
}

export default Item