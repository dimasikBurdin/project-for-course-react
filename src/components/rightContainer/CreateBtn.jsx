import CustomComponent from "./CustomComponent";
import './CreateBtn.css';
import { useEffect, useRef, useState } from "react";

export function CreateBtn(props) {
    const [values, setValues] = useState({ width: '0px', height: '0px', borderRadius: '0px', backgroundColor: 'red' });
    const [text, setText] = useState('');
    const [tagName, setTagName] = useState('textarea');
    const handleText = (event) => setText(event.target.value);
    const selectRef = useRef();
    const handleChange = (event) => {
        const element = event.target;
        const id = element.id;
        let px = element.id === 'backgroundColor' ? '' : 'px';
        const value = event.target.value;
        setValues(prev => ({ ...prev, [id]: value + px }));
        element.value = value;
    }
    const handleSelect = (event) => {
        setTagName(event.target.value);
    };
    console.log('selectRef.current :>> ', selectRef.current);
    return (
        <>
            <div className="custom">
                <div className="left-custom">
                    <h3>Create your own element</h3>
                    <div className="tag">
                        <select onChange={(e) => handleSelect(e)} ref={selectRef} id='select'>
                            <option value={'p'}>paragraph</option>
                            <option value={'div'}>div</option>
                            <option value={'a'}>link</option>
                            <option value={'img'}>img</option>
                        </select>
                    </div>
                    <div className="text">
                        <label htmlFor="text">text :</label>
                        <input onChange={(e) => handleText(e)} type="text" name="" id="textContent" />
                    </div>
                    <div className="width">
                        <label htmlFor="width">width :</label>
                        <input onChange={(e) => handleChange(e)} type="number" name="" id="width" />
                    </div>
                    <div className="height">
                        <label htmlFor="height">height :</label>
                        <input onChange={(e) => handleChange(e)} type="number" name="" id="height" />
                    </div>
                    <div className="borderRadius">
                        <label htmlFor="borderRadius">border-radius :</label>
                        <input onChange={(e) => handleChange(e)} type="number" name="" id="borderRadius" />
                    </div>
                    <div className="backgroundColor">
                        <label htmlFor="backgroundColor">bg-color :</label>
                        <input onChange={(e) => handleChange(e)} type="color" name="" id="backgroundColor" />
                    </div>
                </div>
                <div className="right-custom">
                    <CustomComponent values={values} text={text} selectRef={selectRef} tagName={tagName} />
                </div>
            </div>
        </>
    )
};
