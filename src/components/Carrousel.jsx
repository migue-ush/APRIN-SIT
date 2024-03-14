"use client";
import React, { useEffect } from 'react'
import imgCar from "../data/imagenesCar.json"
import { swiffyslider } from 'swiffy-slider';
import "swiffy-slider/css";
import { lazy } from 'react';
window.swiffyslider = swiffyslider;

window.addEventListener("load", () => {
    window.swiffyslider.init();
});



const Carrousel = () => {

    const imagenesLogos = imgCar.imagenesLogoCar;

    return (
        <div className="
                        swiffy-slider 
                        slider-item-show4 
                        slider-nav-outside 
                        slider-nav-dark 
                        slider-nav-sm 
                        slider-nav-visible 
                        slider-nav-page 
                        slider-item-snapstart 
                        slider-nav-autoplay 
                        slider-nav-autopause 
                        slider-item-ratio 
                        slider-item-ratio-contain 
                        slider-item-ratio-32x9
                        bg-[#6b4996] shadow-lg py-3 py-lg-4" data-slider-nav-autoplay-interval="1500">
            <div className="slider-container">
                {
                    imagenesLogos.map((imgLogo, index)=>{
                        <div key={index}>
                            <Image 
                                src={imgLogo.imgSrc} 
                                alt={imgLogo.alt}
                                width={450}
                                height={150}
                                loading={lazy}
                             />
                        </div>

                    })
                }


                <div>
                    <img src='../img/logos/nextjs_icon_dark.svg' alt="..." />
                </div>
                <div>
                    <img src='../img/logos/nodejs.svg' alt="..." />
                </div>
                <div>
                    <img src='../img/logos/nextjs_icon_dark.svg' alt="..." />
                </div>
                <div>
                    <img src='../img/logos/react.svg' alt="..." />
                </div>
                <div>
                    <img src='../img/logos/tailwindcss.svg' alt="..." />
                </div>
                <div>
                    <img src='../img/logos/nextjs_icon_dark.svg' alt="..." />
                </div>
                <div>
                    <img src='../img/logos/nodejs.svg' alt="..." />
                </div>
                <div>
                    <img src='../img/logos/nextjs_icon_dark.svg' alt="..." />
                </div>
                <div>
                    <img src='../img/logos/react.svg' alt="..." />
                </div>
                <div>
                    <img src='../img/logos/tailwindcss.svg' alt="..." />
                </div>
                
                
            </div>

            <button type="button" className="slider-nav" aria-label="Go left"></button>
            <button type="button" className="slider-nav slider-nav-next" aria-label="Go left"></button>

        </div>
    )
}
export default Carrousel;
