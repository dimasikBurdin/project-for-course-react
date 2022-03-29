import React, { useEffect, useState } from "react";

type TProps = {
    type: string,
    defaultValue: string,
    nameProperty: string

}

export const ChangeInput:React.FC<TProps> = React.memo((props) => {
    const [leftPartValue, setLeft] = useState(props.defaultValue);

    useEffect(() => {
        setLeft(props.defaultValue);
    }, [props.type]);

    function onChangeInput(e : React.ChangeEvent<HTMLInputElement>) {
        setLeft(e.target.value);

        let elementButton = document.querySelector('.preview_btn');
        //@ts-ignore
        let a = props.nameProperty;
        
    }

    return <div className="input-change-container">
        <input className="input-change-input" 
            type={props.type}
            value={leftPartValue}
            min={0} 
            max={100}
            onChange={(x) => onChangeInput(x)}>
            
        </input>
        {leftPartValue}
    </div>
})