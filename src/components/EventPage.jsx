import React from "react";
import event from '../images/event.png'
import { FaRegCalendarAlt } from "react-icons/fa";

function EventPage() {
    return(
        <div className="w-11/12 mx-auto max-w-6xl flex mt-[60px]">
            <div className="w-[40%] ">
                <h1 className="font-5xl font-bold text-5xl text-primary-purple_dark" >Birthday Bash</h1>
                <p className="font-normal text-base text-general-grey_light_300">Hosted by <span className="font-bold ">Elysia</span></p>
                <div className="flex">
                    <span className=""> <FaRegCalendarAlt size={30} color={'#8456EC'} /></span>
                </div>
            </div>
            <div className="">
                <img src={event} alt="" className="w-[100%]" />
                <div>18 August 6:00pm</div>

            </div>
        </div>
    )
}

export default EventPage