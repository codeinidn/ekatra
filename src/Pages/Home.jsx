import React from 'react'

export default function Home() {

  return (
    <div>
      <div className='hero'>
        <div className='logo'>
            <img src="./ekatra.png" alt="" />
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
          <img src='./engagement.webp' alt='engagement'/>
        </div>
        <div className='engagement-price-list'>
          <div className='price-list-1'>
            <p className='p'>PHOTO VIDEO | IDR 2,5</p>
            <p>1 PHOTOGRAPHER & 1 VIDEOGRAPHER</p>
            <p>2 WORKHOURS</p>
            <p>50+ edited photos</p>
            <p>1 MIN VIDEO TEASER</p>
            <p>ALL FILES VIA GOOGLE DRIVE</p>
          </div>
          <div className='price-list-2'>
            <p className='p'>PHOTO VIDEO | IDR 2,5</p>
            <p>1 PHOTOGRAPHER & 1 VIDEOGRAPHER</p>
            <p>2 WORKHOURS</p>
            <p>50+ edited photos</p>
            <p>1 MIN VIDEO TEASER</p>
            <p>ALL FILES VIA GOOGLE DRIVE</p>
          </div>
        </div>
      </div>
    </div>
  )
}
