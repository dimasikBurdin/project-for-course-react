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
    function onClickOther() {
        let menu = document.querySelector('.menu') as HTMLElement;
        menu.classList.toggle('hide');
    }

    function onPreviewBtnClick(e : React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const stylesToClipboard = JSON.stringify(props.styles);
        navigator.clipboard.writeText(stylesToClipboard);
        // @ts-ignore
        e.target.classList.add('green');
        // @ts-ignore
        e.target.textContent = 'Successful!';
        setTimeout(() => {
            // @ts-ignore
            e.target.textContent = 'Copy to clipboard';
            // @ts-ignore
            e.target.classList.remove('green');
        }, 1000);
    }

    return (
        <div className="menu hide">
            <div className="other-button" onClick={onClickOther}>
                Styles
            </div>
            <MenuButtons />
            <MenuBody setStyles={props.setStyles} styles={props.styles}>
                <div className="body-main__preview preview preview_copy">
                    <div className="preview__header">CSS</div>
                    <div className="preview__body preview__body_padding">
                        <div className="preview__text">
                            {"" + JSON.stringify(props.styles) + "\n"}                    
                        </div>
                    </div>
                    <div className="preview__btn" onClick={(e) => onPreviewBtnClick(e)}>
                        <button className="preview__link">Copy to clipboard</button>
                    </div>
                </div>
            </MenuBody>
        </div>
    );
})