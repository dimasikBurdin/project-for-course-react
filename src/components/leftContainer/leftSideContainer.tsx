import React from "react";
import { MenuBody } from "./menuBody";
import { MenuButtons } from "./menuButtons";
import './leftSideContainer.css'
import { StyleType } from "../../StyleType";
import { ChangeInput } from "./components/changeInput";

type TProps = {
    setStyles: React.Dispatch<React.SetStateAction<StyleType>>,
    styles: StyleType,
    
}

export const LeftSideContainer: React.FC<TProps> = React.memo((props) => {
    return <div className="menu hide">
        <MenuButtons />
        <MenuBody setStyles={props.setStyles} styles={props.styles}>
            <div className="body-main__preview preview preview_copy">
                <div className="preview__header">CSS</div>
                <div className="preview__body preview__body_padding">
                    <div className="preview__text">
                        {JSON.stringify(props.styles)}                    
                    </div>
                </div>
                <div className="preview__btn">
                    <button className="preview__link">Copy to clipboard</button>
                </div>
            </div>
        </MenuBody>
        
    </div>
})