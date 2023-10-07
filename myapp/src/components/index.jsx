import React, { useState, useEffect } from "react";
import imgOne from "../assets/images/nkar1.jpg"
import imgTwo from "../assets/images/nkar2.jpg"
import imgThree from "../assets/images/nkar3.jpg"
import imgFour from "../assets/images/nkar4.jpg"
import imgFive from "../assets/images/nkar5.jpg"
import imgSix from "../assets/images/nkar6.jpg"
import "./style.css"

export const Imgslider = () => {
    const images = [
        imgOne,
        imgTwo,
        imgThree,
        imgFour,
        imgFive,
        imgSix,
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;

        if (isRunning) {
            timer = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 2000);
        } else {
            clearInterval(timer);
        }

        return () => {
            clearInterval(timer);
        };
    }, [isRunning]);

    const handleStartClick = () => {
        setIsRunning(true);
    };

    const handleStopClick = () => {
        setIsRunning(false);
    };

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => {
            let newIndex = prevIndex - 1;
            if (newIndex < 0) {
                newIndex = images.length - 1;
            }
            return newIndex;
        });
    };
    
    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => {
            let newIndex = prevIndex + 1;
            if (newIndex >= images.length) {
                newIndex = 0;
            }
            return newIndex;
        });
    };
    

    const handleImgClick = (index) => {
        setCurrentIndex(index);
    };
    

    return (
        <div className="slider">

            <div className="start-stop">
                <button className="start" onClick={handleStartClick}>Start</button>
                <button className="stop" onClick={handleStopClick}>Stop</button>
            </div>

            <div className="img-box">
                <img src={images[currentIndex]} alt=""/>
            </div>

            <div className="next-prev">
                <button onClick={handlePrevClick}>Prev</button>
                <button onClick={handleNextClick}>Next</button>
            </div>

            <div className="img-container">
                {images.map((image, index) => (
                <img
                key={index}
                src={image}
                alt=""
                className={index === currentIndex ? "active" : ""}
                onClick={() => handleImgClick(index)}
                />
                ))}
                </div>
        </div>
    );
};
