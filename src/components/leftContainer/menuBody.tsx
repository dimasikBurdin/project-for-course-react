import React, { useEffect, useState } from "react";
import { StyleType } from "../../StyleType";

import { ChangeInput } from "./components/changeInput";

type TProps = {
    setStyles: React.Dispatch<React.SetStateAction<StyleType>>,
    styles: StyleType
}

export const MenuBody:React.FC<TProps> = React.memo((props) => {
    const [changeInput, setChangeInput] = useState(<></>);
    const [currentChangeValue, setCurrentChangeValue] = useState({nameProp:'', valueProp: ''});

    const [activeButton, setActiveButton] = useState(<></>)

    function onClickColorButton(e : React.MouseEvent<HTMLLIElement, MouseEvent>) {
        let eventTarget = e.target as HTMLElement
        
        // //@ts-ignore
        // let activeElements = document.querySelectorAll('.active');
        // //@ts-ignore
        // for(let e of activeElements) {
        //     e.classList.remove('active');
        // }
        // //@ts-ignore
        // let elem = document.getElementById(e.target.id);
        // elem?.classList.add('active');
        console.log(eventTarget.id)
        

        setChangeInput(<ChangeInput type="color" defaultValue="#000000" nameProperty={eventTarget.id} currentValue={currentChangeValue.valueProp} setCurrentValue={setCurrentChangeValue}/>)
    }

    function onClickOtherButton(e : React.MouseEvent<HTMLLIElement, MouseEvent>) {
        let eventTarget = e.target as HTMLElement
        setChangeInput(<ChangeInput nameProperty={eventTarget.id} type="range"  defaultValue="50" currentValue={currentChangeValue.valueProp} setCurrentValue={setCurrentChangeValue} />)
    }
       
    useEffect(() => {
        switch(currentChangeValue.nameProp) {
            case 'color':
                props.setStyles({...props.styles, color:currentChangeValue.valueProp})
                break
            case 'background':
                props.setStyles({...props.styles, backgroundColor:currentChangeValue.valueProp})
                break
            case 'fontSize':
                props.setStyles({...props.styles, fontSize: currentChangeValue.valueProp + 'px'})
                break
            case 'fontWeight':
                // props.setStyles({...props.styles, fontWeight : currentChangeValue.valueProp + 'px'})
                break
            case 'padding':
                props.setStyles({...props.styles, padding: currentChangeValue.valueProp + 'px'})
                break
            case 'radius':
                props.setStyles({...props.styles, borderRadius: currentChangeValue.valueProp + 'px'})
                break
                
        }

        return () => setCurrentChangeValue({nameProp:'', valueProp: ''})
    }, [currentChangeValue.valueProp])

    return <div className="menu__body">
        <div className="menu__accordion">
            <ul className="menu__list list-menu">
                <li className="list-menu__item" id="background" onClick={x => onClickColorButton(x)} >Background color</li>
                <li className="list-menu__item" id="color" onClick={onClickColorButton}>Color</li>
                <li className="list-menu__item" id="fontSize" onClick={onClickOtherButton}>Font size</li>
                <li className="list-menu__item" id="fontWeight" onClick={onClickOtherButton}>Font weight</li>
                <li className="list-menu__item" id="padding" onClick={onClickOtherButton}>Horizontal padding</li>
                <li className="list-menu__item" id="padding" onClick={onClickOtherButton}>Vertical padding</li>
                <li className="list-menu__item" id="radius" onClick={onClickOtherButton}>Border radius</li>
                <li className="list-menu__item" onClick={onClickOtherButton}>Box Shadow</li>
                <li className="list-menu__item" onClick={onClickOtherButton}>Text Shadow</li>
            </ul>
        </div>
        {changeInput}
    </div>
})