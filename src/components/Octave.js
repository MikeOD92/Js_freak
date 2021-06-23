import Keys from './Keys.js'

export default function Octave(props) {

return (
    <div className="keyboard octave">

        <Keys keyType = "whiteKey" note="C" pitch={props.pitch}/>
        <Keys keyType = "blackKey" note="C#" pitch={props.pitch}/>
        <Keys keyType = "whiteKey" note="D" pitch={props.pitch}/>
        <Keys keyType = "blackKey" note="D#" pitch={props.pitch}/>
        <Keys keyType = "whiteKey" note="E" pitch={props.pitch}/>
        <Keys keyType = "whiteKey" note="F" pitch={props.pitch}/>
        <Keys keyType = "blackKey" note="F#" pitch={props.pitch}/>
        <Keys keyType = "whiteKey" note="G" pitch={props.pitch}/>
        <Keys keyType = "blackKey" note="G#" pitch={props.pitch}/>
        <Keys keyType = "whiteKey" note="A" pitch={props.pitch}/>
        <Keys keyType = "blackKey" note="A#" pitch={props.pitch}/>
        <Keys keyType = "whiteKey" note="B" pitch={props.pitch}/>

    </div>
);
}