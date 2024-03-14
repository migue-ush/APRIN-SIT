"use client";
import React, { useEffect } from 'react'
import imgCar from "../data/imagenesCar.json"
import { swiffyslider } from 'swiffy-slider';
import "swiffy-slider/css";



const Carrousel = () => {

    const imagenesLogos = imgCar.imagenesLogoCar;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.swiffyslider = swiffyslider;
            window.swiffyslider.init()
        }
    }, []);

    return (
        <div className="swiffy-slider slider-item-show4 slider-nav-outside slider-nav-dark slider-nav-sm slider-nav-visible slider-nav-page slider-item-snapstart slider-nav-autoplay slider-nav-autopause slider-item-ratio slider-item-ratio-contain slider-item-ratio-32x9 bg-white shadow-lg py-3 py-lg-4" data-slider-nav-autoplay-interval="2000">
            <div className="slider-container">
                <div>
                    <Image 
                        src={"../img/logos/nextjs_icon_dark.svg"}
                        alt="..." />
                </div>
                <div>
                    <Image 
                        src={"../img/logos/nextjs_icon_dark.svg"}
                        loading="lazy" 
                        alt="..." />
                </div>
                <div>
                    <Image 
                        src={"../img/logos/nextjs_icon_dark.svg"}
                        loading="lazy" 
                        alt="..." />
                </div>
                <div>
                    <Image 
                        src={"../img/logos/nextjs_icon_dark.svg"}
                        loading="lazy" 
                        alt="..." />
                </div>
            </div>

            <button type="button" className="slider-nav" aria-label="Go left"></button>
            <button type="button" className="slider-nav slider-nav-next" aria-label="Go left"></button>

        </div>
    )
}
export default Carrousel;
