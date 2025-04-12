import React from 'react'

const Bio = ({name,description}) => {
  return (
    <div>
    <h1>Bio</h1>  
<h2>{name}</h2>
<p>{description}</p>
    </div>
  )
}

export default Bio