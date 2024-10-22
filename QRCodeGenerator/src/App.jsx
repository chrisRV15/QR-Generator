import { useState } from 'react'
import QRCode from 'qrcode'
import './styles.css'

export default function App(){
  const [url, setUrl] = useState('')
  const [qrcode, setQrcode] =useState ('')

  const generateQR = async () => {
    try{
      const response = await QRCode.toDataURL(url, {
        width: 700,
        margin: 2
      })
      console.log(url)
      setQrcode(response)
    }
    catch (err){
      console.error(err)
    }
  }

  return (
    <>
    <div className='App-Container'>
      <div>
        <h1>QR Code Generator</h1>
        <input type='text' 
        placeholder='https://www.google.com/'
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={generateQR}>Generate</button>
        {qrcode && <>
          <div>
            <img src={qrcode}/>
            <a href={qrcode} download="QRCode.png">Download</a>
          </div> 
        </>}
      </div>
    </div>
    </>
  )
}