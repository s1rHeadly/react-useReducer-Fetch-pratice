import React from 'react'
import Item from './Item'

const Items = ({details}) => {
  console.log(details)
  return (
    <ul className="itemsList">
    {details.length > 0 && details?.map((item) => (
      <Item info={item} key={item.location.postcode}/>
    ))}
  </ul>
  )
}

export default Items