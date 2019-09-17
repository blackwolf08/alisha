import React from 'react'
import Card from './Card'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'

const imagesArray = [img1, img2, img3, img4, img5]

const Gallery = () => {
    return (
        <div className="gallery--root">
            {imagesArray.map(image=>{
                return <Card url={image} />
            })}
        </div>
    )
}

export default Gallery
