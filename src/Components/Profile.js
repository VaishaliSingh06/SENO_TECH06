import React from 'react'
import Avatar from './Avatar'
import Bio from './Bio'

const Profile = () => {
  const user ={
    name:"Thakur Vaishu Singh",
    description:"Full Stack Developer | Passionate about Mental Health & Tech",
    imgurl:"/img/profile.jpeg"
}
    return (
      <>
    <div  className='avtar'  style={{ textAlign: "center", marginTop: "50px" }}>
    <h1>MyProfile 😄</h1>

    
    <Avatar imgurl={user.imgurl} altText={user.name}/>
    <Bio name ={user.name} description ={user.description}/>
    </div>
    </>
  )
}

export default Profile;