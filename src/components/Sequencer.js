import React from 'react';
import { useState } from 'react';
import * as Tone from "tone";
import SequencerGrid from './SequencerGrid';

export default function Sequencer(){

    const[beat, setbeat] = useState(0);

    return(
        <div className='sequencer'>

            <SequencerGrid/>

            
        </div>
    )
}