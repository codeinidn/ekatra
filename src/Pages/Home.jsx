import React from 'react'

export default function Home() {

  return (
    <div>
      <div className='hero'>
        <div className='logo'>
            <img src="./ekatra.png" alt="ekatra-logo" className='ekatra-logo'/>
        </div>
        <div className="vertical-line"></div>
        <div className='slogan'>
            <p>Let’s make it (concept &idea) happen.</p>
        </div>
      </div>
      <div className='engagement'>
        <div>
          <p className='engagement-title'>ENGAGEMENT</p>
          <div className='border-bottom'></div>
          <img src='./engagement.webp' alt='engagement' className='img-engagement'/>
        </div>
        <div className='engagement-price-list'>
          <div className='price-list-1'>
            <p className='p'>PHOTO VIDEO | <span className='black'>IDR 2,5</span></p>
            <p className='list'>1 PHOTOGRAPHER & 1 VIDEOGRAPHER</p>
            <p className='list'>2 WORKHOURS</p>
            <p className='list'>50+ edited photos</p>
            <p className='list'>1 MIN VIDEO TEASER</p>
            <p className='list'>ALL FILES VIA GOOGLE DRIVE</p>
          </div>
          <div className='price-list-2'>
            <p className='p'>PHOTO ONLY | <span className='black'>IDR 1,7</span></p>
            <p className='list'>1 PHOTOGRAPHER + ASSIST</p>
            <p className='list'>2 WORKHOURS</p>
            <p className='list'>25+ edited photos</p>
            <p className='list'>ALL FILES VIA GOOGLE DRIVE</p>
          </div>
        </div>
      </div>
      <div className='engagement'>
        <div>
          <p className='engagement-title'>PREWEDDING</p>
          <div className='border-bottom'></div>
          <img src='./prewedding.webp' alt='engagement' className='img-prewedding'/>
        </div>
        <div className='engagement-price-list'>
          <div className='price-list-1'>
            <p className='p'>PHOTO VIDEO | <span className='gold'>IDR 2,8</span></p>
            <p className='list'>1 PHOTOGRAPHER & 1 VIDEOGRAPHER</p>
            <p className='list'>1 MINIMALIST 16RP FRAME</p>
            <p className='list'>1 TO 2 MINUTES VIDEO DURATION</p>
            <p className='list'>MAX 2 OUTFITS</p>
            <p className='list'>50- EDITED PHOTO</p>
            <p className='list'>ALL FILES VIA GOOGLE DRIVE</p>
          </div>
          <div className='price-list-2'>
            <p className='p'>PHOTO ONLY | <span className='gold'>IDR 2</span></p>
            <p className='list'>1 PHOTOGRAPHER = 1 Assist</p>
            <p className='list'>1 MINIMALIST 16RP FRAME</p>
            <p className='list'>4 workhours</p>
            <p className='list'>MAX 2 OUTFITS</p>
            <p className='list'>50 EDITED PHOTO</p>
            <p className='list'>ALL FILES VIA GOOGLE DRIVE</p>
          </div>
        </div>
      </div>
      <div className='notes'>
      <p className='p-notes'>*All prices in  Million Rupiahs | All prices exclude MUA, wardrobe & spot fee location | Add cost outside Bandung IDR 1</p>
      </div>
      <div className='extras'>
       <div>
        <p className='title-extras'>EXTRAS</p>
        <p className='p-extras'>PRINT 1 PC 16RP FRAMED = Rp. 300.000</p>
        <p className='p-extras'>print 1 pc 5r framed = rp. 70.000</p>
        <p className='p-extras'>web digital invitation = rp. 250.000</p>
        <p className='p-extras'>same day edit (video) = rp.1.000.000</p>
        <p className='p-extras'>same day edit (photos) = rp. 250.000</p>
        <p className='p-extras'>same day edit (photos) = rp. 250.000</p>
       </div>
      </div>
    </div>
  )
}
