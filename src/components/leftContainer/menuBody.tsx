import React from "react";
import './menuBody.css';

export const MenuBody:React.FC = React.memo(() => {
    return <div className="menu__body">
        <div className="menu__accordion">
            <ul className="menu__list list-menu">
                <li className="list-menu__item">Background color</li>
                <li className="list-menu__item">Color</li>
                <li className="list-menu__item">Font</li>
                <li className="list-menu__item">Font size</li>
                <li className="list-menu__item">Font weight</li>
                <li className="list-menu__item">Horizontal padding</li>
                <li className="list-menu__item">Vertical padding</li>
                <li className="list-menu__item">Border</li>
                <li className="list-menu__item">Border radius</li>
                <li className="list-menu__item">Box Shadow</li>
                <li className="list-menu__item">Text Shadow</li>
                <li className="list-menu__item">Button text</li>
                <li className="list-menu__item">Button class</li>
            </ul>
        </div>
    </div>
})