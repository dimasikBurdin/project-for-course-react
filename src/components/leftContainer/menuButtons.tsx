import React from "react";

export const MenuButtons:React.FC = React.memo(() => {
    return <div className="menu__header">
        <button className="menu__btn" >Button styles</button>
        <button className="menu__btn">Hover styles</button>
    </div>
});