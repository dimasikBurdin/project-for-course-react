import React, { useEffect, useState } from "react";

type TProps = {
    type: string,
    defaultValue: string,
    nameProperty: string,
    setCurrentValue: React.Dispatch<React.SetStateAction<{
        nameProp: string;
        valueProp: string;
    }>>,
    min?: string | number,
    max?: string,
    currentValue: string
}

export const ChangeInput:React.FC<TProps> = React.memo((props) => {
    const [leftPartValue, setLeft] = useState(props.defaultValue);

    useEffect(() => {
        let defaultValue = '';
        if(!props.currentValue) {            
            defaultValue = props.defaultValue            
        } else {
            defaultValue = props.currentValue
        }
        // isNaN(+currentChangeValue)
        setLeft(defaultValue);
    }, [props.nameProperty]);

    function onChangeInput(e : React.ChangeEvent<HTMLInputElement>) {
        setLeft(e.target.value);
        props.setCurrentValue({nameProp: props.nameProperty, valueProp: e.target.value})
    }

    return <div className="input-change-container">
        <input className="input-change-input" 
            type={props.type}
            value={leftPartValue}
            min={props.min} 
            max={50}
            onChange={(x) => onChangeInput(x)}
            >
            
        </input>
        {leftPartValue}
    </div>
})