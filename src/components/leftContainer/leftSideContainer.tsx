import React from "react";
import { MenuBody } from "./menuBody";
import { MenuButtons } from "./menuButtons";
import './leftSideContainer.css'

export const LeftSideContainer: React.FC = React.memo(() => {
    return <div className="menu">
        <MenuButtons />
        <MenuBody />
    </div>
})