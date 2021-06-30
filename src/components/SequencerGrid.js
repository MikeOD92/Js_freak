import React from 'react'
import * as Tone from "tone";
import { useState } from 'react';

export default function SequencerGrid(props){

    // create our synths 
    const seqSynths = (num) => {

        const sythArr = [];
        
        for(let i = 0; i < num; i++ ){
            let newSynth = new Tone.Synth({ oscillator: { type: "square8" } }).toDestination();
            sythArr.push(newSynth);
        }
        return sythArr;
    }
    // create sequencer grid
    // take the notes and make a grid where each row is 8 of the same note
    // each row is a diffrent note the rows array has sub arrays of 8
    const grid = (notes) => {

        const rows = [];

        for (const note of notes){

            const row = [];

            for( let i = 0; i < 8; i++){
                row.push({
                note: note,
                isActive: 'false'
            });
            }
            rows.push(row)
        }
        return rows;
    };


    const synths = seqSynths(6);

    const playgrid = grid(['F4','Eb4','C4',"Bb3",'Ab3','F3']);

    let beat = 0;
    let playing = false;
    let started = false;

    
    // this is the looping play function 
    const musicLoop = () => {

        const repeat = (time) => {

            playgrid.forEach((row, index) => {

                let synth = synths[index];
                let note = row[beat];

                if(note.isactive){
                    synth.triggerAttackRelease(note.note, "8n", time);
                }
            });
            beat = (beat + 1) % 8;
        };

        Tone.Transport.bpm.value = 120;
        Tone.Transport.scheduleRepeat(repeat, "8n");      
    };

    const activateNote = (e) => {
        e.preventDefault();

        if(e.target.isactive === "true"){
            e.target.isactive = "false"
            e.target.classList.remove('activeSeqPad');
            console.log(e.target.isactive)
        } else{
            e.target.isactive = "true";
            e.target.className = "activeSeqPad";
            console.log(e.target.isactive)
            
        }
        
    }

    const play = (e) =>{
        console.log('playing')

        if(!started){
            Tone.start();
            Tone.getDestination().volume.rampTo(-10, 0.001)
            musicLoop();
            started = true;
        }

        if (playing) {
            e.target.innerText = "Play";
            Tone.Transport.stop();
            playing = false;
        } else {
            e.target.innerText = "Stop";
            Tone.Transport.start();
            playing = true;
        }
    }
    return(
        <div className='sequencerGrid'>
            {playgrid.map((arr)=>{
                return(
                    arr.map((button)=>{
                    return(
                        <button
                            note={button.note}
                            isactive={false}
                            onClick={activateNote}
                        />
                        )
                }))
                
            })}
            <button onClick={play}> Start </button>
        </div>
    )
}