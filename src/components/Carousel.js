import React, { useState, useEffect } from 'react'
import img1 from '../images/img00.png'
import img2 from '../images/img01.png'
import img3 from '../images/img02.png'
import img4 from '../images/img03.png'
import img5 from '../images/img04.png'
const Carousel = () => {
    const [currentindex, setindex] = useState(0)
    const images = [img1, img2, img3, img4, img5];
useEffect(() => {
    const interval = setInterval(() => {
      setindex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className='carousel'>
<button id='left-btn' className='car-btn' onClick={() =>
          setindex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }><i class="fa-solid fa-angle-left"></i></button>
<button id='right-btn' className='car-btn' onClick={() => setindex((prev) => (prev + 1) % images.length)}><i class="fa-solid fa-angle-right"></i></button>
{images.map((img, i)=> (<div key={i} className={`image ${currentindex===i ? 'active' : ''}`}><img src={img} alt="" /></div>))}
    </div>
  )
}

export default Carousel