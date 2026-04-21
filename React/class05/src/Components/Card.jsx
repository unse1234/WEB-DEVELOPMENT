import React from 'react'

const Card = (props) => {
  return (
 <div className="mb-4 break-inside-avoid">
    <img src={props.data.download_url} className="w-full rounded-xl" />
  </div> 
  )
}
export default Card
