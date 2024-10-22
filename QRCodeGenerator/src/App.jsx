import { useState } from 'react'
import QRCode from 'qrcode'
import './styles.css'

export default function App(){
  const [url, setUrl] = useState('')
  const [qrcode, setQrcode] =useState ('')

  return (
    <>
    <div className='App-Container'>
      <div>
        <h1>QR Code Generator</h1>
        <input type='text' placeholder='https://www.google.com/'></input>
        <button>Generate</button>
          <div>
            <img src=''></img>
          </div> 
      </div>
    </div>
    </>
  )
}