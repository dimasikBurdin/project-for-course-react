import React from "react";
import { MenuBody } from "./menuBody";
import { MenuButtons } from "./menuButtons";
import './leftSideContainer.css'
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

export const LeftSideContainer: React.FC<TProps> = React.memo((props) => {
    return <div className="menu">
        <MenuButtons />
        <MenuBody setStyles={props.setStyles}>
            {/* <ChangeInput type="range" defaultValue='50'/> */}
        </MenuBody>
        
    </div>
})