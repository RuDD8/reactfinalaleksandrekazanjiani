import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '.././App.css';
import ImgComp from './ImgComp';
import i1 from "./Img/i1.jpg";
import i2 from "./Img/i2.jpg";
import i3 from "./Img/i3.jpg";
import i4 from "./Img/i4.jpg";
const ImageCarousel = () => {
    let arrayOfImage = [<ImgComp src={i1} />, <ImgComp src={i2} />, <ImgComp src={i3} />, <ImgComp src={i4} />];
    const [x, setX] = useState(0)

    const prev = () => {
        x === 0 ? setX(-100 * (arrayOfImage.length - 1)) : setX(x + 100);

    };
    const next = () => {
        x === -100 * (arrayOfImage.length - 1) ? setX(0) : setX(x - 100);
    };
    return (
        <div className="imgcarrousel">{
            arrayOfImage.map((img, index) => {
                return (
                    <div key={index} className="img" style={{ transform: `translateX(${x}%)` }}>
                        {img}
                    </div>
                );
            })}
            <button id="prev_Button" onClick={prev}>
                Prev
            </button>
            <button id="next_Button" onClick={next}>
                Next
            </button>
        </div>
    );
}
export default ImageCarousel;