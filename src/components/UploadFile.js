import React, { useState } from 'react'

function UploadUI(porps) {
  return (
    <div>
      <input type="file" onChange={porps.handleFileChange} />
      <button onClick={porps.handleUpload}>上传</button>
    </div>
  )
}

export default function UploadHandle() {
  const [file, setFile] = useState(null)
  function handleFileChange(e) {
    const [file] = e.target.files
    console.log(file)
    if (file) {
      setFile(file)
    }
  }
  function handleUpload() { }
  return (
    <div>

      <UploadUI handleFileChange={handleFileChange} handleUpload={handleUpload} />
    </div>
  )

}
function request({ url = "",
  method = "POST",
  data,
  headers = {},
  requestList } = {}) {

}