import './Input.css'
import {useEffect, useRef} from "react";
export default function Input({setInputValue, showInput}) {

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    return(
        <div className="inputContainer">
            <div className="noteContainer">
                <img src={require('../assets/img/la-musique.png')} alt="musique"/>
            </div>
            <div className="inputDiv">
                <div>Choose a number :</div>
                <input autoFocus type="number" onChange={handleChange} />
            </div>
            
        </div>
    )
}