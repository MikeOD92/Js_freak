import React from 'react'
import * as Tone from "tone";

export default function Drumpad(){

    const sound = (e, note) => {

        e.preventDefault();

        const synth = new Tone.MetalSynth().toDestination();
        const now = Tone.now();

        // console.log(note)
        
        synth.triggerAttack(note, now);

        synth.triggerRelease("+0.15");
    }

    return(
        <div className="drum-area">

            <div className='drumPad' onClick={(e) => sound(e,"F3")}></div>
            <div className='drumPad' onClick={(e) => sound(e,"G2")}></div>
            <div className='drumPad' onClick={(e) => sound(e,"E2")}></div>
            <div className='drumPad' onClick={(e) => sound(e,"A2")}></div>
            <div className='drumPad' onClick={(e) => sound(e,"B2")}></div>
            <div className='drumPad' onClick={(e) => sound(e,"C2")}></div>
            <div className='drumPad' onClick={(e) => sound(e,"D2")}></div>
            <div className='drumPad' onClick={(e) => sound(e,"F1")}></div>
        </div>
    )
}