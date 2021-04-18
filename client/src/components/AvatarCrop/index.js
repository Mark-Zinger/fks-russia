import React, { useState } from 'react';
import AvatarUploader from 'react-avatar-uploader';


const AvatarCrop = (props) => {
  
  

  
  return (
    <AvatarUploader
    size={150}
    uploadURL="http://localhost:3000"
    fileType={"image/png"}/>
  )
}

export default AvatarCrop;

