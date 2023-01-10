import './Home.css'
import Input from "./Input";
import {useState, useCallback, useEffect, useRef} from "react";
import { musics } from '../datas'
export default function Home() {

    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [imageDisplayed, setImageDisplayed] = useState(0);

    const theInput = useRef(null)

    const displayInput = useCallback((event) => {
        switch (event.key) {
            case "f":
                setShowInput(true)
                theInput.current.focus()
                break;
            case "q":
                if (document.activeElement !== document.querySelector('input')) {
                    setShowInput(false)
                }
                break;
            case "Enter":
                if (document.activeElement === document.querySelector('input')) {
                    setShowInput(false)
                }
                break;
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", displayInput, false);

        return () => {
            document.removeEventListener("keydown", displayInput, false);
        };
    }, []);

    useEffect(() => {
        setImageDisplayed(inputValue)
    }, [showInput]);

    return(
        <div className="image-container">
            <img className="image" src={musics[imageDisplayed] ? musics[imageDisplayed] : musics[0]} alt="Don't walk away"/>
            {showInput && <Input setInputValue={setInputValue} showInput={showInput} />}
        </div>
    )
}