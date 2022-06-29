import React, {useRef, useEffect} from "react";
import './transition.css'
import {Power4} from 'gsap'

function Transition({timeline}) {
    const trans = useRef(null);
    useEffect(()=>{
        timeline.to(trans.current,{
            duration:5,
            x:2600,
            ease:Power4.easeOut
        });
    })
    return ( 
        <div>
             <div className = "transition-effect" ref={trans}></div>

        </div>
    )
}
export default Transition