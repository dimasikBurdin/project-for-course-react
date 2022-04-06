import React from "react";
import { MenuBody } from "./menuBody";
import { MenuButtons } from "./menuButtons";
import './leftSideContainer.css'
import { StyleType } from "../../StyleType";
import { ChangeInput } from "./components/changeInput";

type TProps = {
    setStyles: React.Dispatch<React.SetStateAction<StyleType>>,
    styles: StyleType
}

export const LeftSideContainer: React.FC<TProps> = React.memo((props) => {
    return <div className="menu">
        <MenuButtons />
        <MenuBody setStyles={props.setStyles} styles={props.styles}>
            {/* <ChangeInput type="range" defaultValue='50'/> */}
        </MenuBody>
    </div>
})