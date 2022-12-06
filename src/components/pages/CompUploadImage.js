import React from 'react'

function CompUploadImage() {
  return (
    <div>
        <form action="/image-upload" method='post' encType='multipart/form-data'>
            <input type="file" name='image' />
            <button type="submit">Upload</button>
        </form>
    </div>
  )
}

export default CompUploadImage