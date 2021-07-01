import React from 'react'
import * as Tone from "tone";
import { useState } from 'react';

const newGrid = () =>{

        const grid = [];

        for (let i = 0; i < 8; i++){
            let column = [
                { note: 'F', isActive: false },
                { note: 'Eb', isActive: false },
                { note: 'C', isActive: false },
                { note: 'Bb', isActive: false },
                { note: 'Ab', isActive: false }
            ];
            grid.push(column);
        }
        return grid
    }

const octave = 4;

export default function Sequencer(props){

    
}