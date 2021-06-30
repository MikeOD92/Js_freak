import React from 'react'
import * as Tone from "tone";
import { Synth } from 'tone';


export default function Keys(props){

    const {keyType, note, pitch} = props;

    // const notesArr = ['C','C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    
    const sound = (e) => {

        e.preventDefault();

        const synth = new Tone.Synth().toDestination();
        
        synth.triggerAttack(`${note}${pitch}`);

        synth.triggerRelease("+0.25");

    }

    return(
        <div className={`key ${keyType} ${props.note}`} onClick={(e) => sound(e)}>{}</div>
    )
}


