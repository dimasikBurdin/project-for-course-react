import React from "react";
import { PreviewContainer } from "./previewContainer";
import { CssInfoPreview } from "./cssInformationPreview";
import { Space } from "antd";
import './rightSideContainer.css';
import { StyleType } from "../../StyleType"; 

type TProps = {
    styles: StyleType,
    setCurrent: React.Dispatch<React.SetStateAction<HTMLElement>>
}

export const RightSide: React.FC<TProps> = React.memo((props) => {
    function onClickOther() {
        let menu = document.querySelector('.menu') as HTMLElement;
        menu.classList.toggle('hide');
    }

    function onClickBody(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        let element = e.target as HTMLElement;        
        props.setCurrent(element);
        console.log(element)
    }

    return <div className="body-main" onClick={e => onClickBody(e)}>
        <button className="other-button" onClick={onClickOther}>Назад</button>
        <PreviewContainer styles={props.styles}></PreviewContainer>
        <CssInfoPreview styles={props.styles}></CssInfoPreview>
    </div>
})