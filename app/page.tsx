'use client'

import { SetStateAction, useState } from 'react'
import Image from 'next/image'
import './globals.css'

export default function Home() {

  const [nama, setNama] = useState('Mohammad Aqsha Arianto Latif')
  const [Setnama, setValue] = useState("");
  
  function simpanValue(event: { target: { value: SetStateAction<string> } }) {
    setValue(event.target.value);
  }

  function handlerGantiNama() {
    setNama(Setnama);
  }
  
  
  
  return (
    <div className='body'>
      <div className="banner-container">
        {/* Kartunya */}
        <div className="header-banner-wrapper">
          {/* Foto Profil dan Nama */}
          <div className="profile-header-banner">
            {/* Foto Profil*/}
            <Image
              src="/assets/profil.png"
              alt="Picture of the author"
              fill
              objectFit='contain'
            />
          </div>
          <div className="content-header-banner">
            {/* Nama dan Kawan2*/}   
            <h1>{nama}</h1>
            <div className="bio-nim-header-banner">
            {/* NIM dan BIO*/}
            <p>D121211018</p>
            <p>Survey Corps, Shinzou Sasageyo</p>
            </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          {/* Tombol CTA */}
          <input className="text-area" type="text" value={Setnama} onChange={simpanValue}/>
            <div className='cta-button' 
            style={{
              marginTop: '12px'
            }}
            
            onClick={handlerGantiNama}>
              <p>Changed</p>
            </div>
        </div>
      </div>
    </div>
  )
}