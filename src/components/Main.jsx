import React from "react";
import hero from '../images/hero_image.svg'
import Button from "./shared/Button";

function Main () {
    return(
       <div className="w-11/12 mx-auto max-w-7xl flex justify-between items-center mt-[60px]">
        <div>
            <img src={hero} className="w-[100%]" alt="" />
        </div>
        <div className="w-[40%] text-right">
            <h1 className="lg:text-6xl font-bold text-primary-purple_dark">Imagine if <span style={{background:'linear-gradient(90deg, #8456EC 24.2%, #E87BF8 120.46%)',
                webkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
            }}>Snapchat</span> had Events</h1>
            <p className="text-2xl">Easily Host and share events with your friends across any socia media</p>
             <Button>🎉 Create my event</Button>
        </div>
       </div>
    )
}

export default Main