import React, { useState } from "react";

import { ChangeInput } from "./components/changeInput";

type TProps = {
    setStyles: React.Dispatch<React.SetStateAction<{
        backgroundColor: string;
        color: string;
        fontSize: string;
        padding: string;
        borderRadius: string;
    }>>
}

export const MenuBody:React.FC<TProps> = React.memo((props) => {
    const [changeInput, setChangeInput] = useState(<></>);
    const [currentChangeValue, setCurrentChangeValue] = useState('');

    function onClickColorButton(e : React.MouseEvent<HTMLLIElement, MouseEvent>) {        
        //@ts-ignore
        let activeElements = document.querySelectorAll('.active');
        //@ts-ignore
        for(let e of activeElements) {
            e.classList.remove('active');
        }
        //@ts-ignore
        let elem = document.getElementById(e.target.id);
        elem?.classList.add('active');
        //@ts-ignore
        setChangeInput(<ChangeInput type="color" defaultValue="#000000" nameProperty={e.target.id}/>)
    }

    function onClickOtherButton() {
        // //@ts-ignore
        // setChangeInput(<ChangeInput type="range" defaultValue="50" />)
    }

    return <div className="menu__body">
        <div className="menu__accordion">
            <ul className="menu__list list-menu">
                <li className="list-menu__item" id="background" onClick={x => onClickColorButton(x)} >Background color</li>
                <li className="list-menu__item" id="color" onClick={onClickColorButton}>Color</li>
                <li className="list-menu__item" onClick={onClickOtherButton}>Font size</li>
                <li className="list-menu__item" onClick={onClickOtherButton}>Font weight</li>
                <li className="list-menu__item" onClick={onClickOtherButton}>Horizontal padding</li>
                <li className="list-menu__item" onClick={onClickOtherButton}>Vertical padding</li>
                <li className="list-menu__item" onClick={onClickOtherButton}>Border radius</li>
                <li className="list-menu__item" onClick={onClickOtherButton}>Box Shadow</li>
                <li className="list-menu__item" onClick={onClickOtherButton}>Text Shadow</li>
            </ul>
        </div>
        {changeInput}
    </div>
})