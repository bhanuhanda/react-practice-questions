import { useState } from 'react';
import './Carousel.css';
import Image1 from "/src/assets/images/1.jpg";
import Image2 from "/src/assets/images/2.jpg";
import Image3 from "/src/assets/images/3.jpg";
import Image4 from "/src/assets/images/4.jpg";
import Image5 from "/src/assets/images/5.jpg";

const images = [Image1, Image2, Image3, Image4, Image5];

const Carousel = () => {
    const [currSlide, setCurrSlide] = useState(0);
    
    const handlePrevious = () => {
        if(currSlide === 0) setCurrSlide(images.length-1);
        else setCurrSlide(currSlide-1);
    }
    const handleNext = () => {
        if(currSlide >= images.length-1) setCurrSlide(0);
        else setCurrSlide(currSlide+1);
    }

    return (
        <>
            <h1>Carousel</h1>
            <div className="carousel_container">
                <div onClick={handlePrevious} className="prev_btn btn">{'<'}</div>
                <div className="image_container">
                    <img src={images[currSlide]} />
                </div>
                <div onClick={handleNext} className="next_btn btn">{'>'}</div>
            </div>
        </>
    )
}

export default Carousel; 
