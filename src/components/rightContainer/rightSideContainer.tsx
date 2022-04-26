import React from "react";
import { PreviewContainer } from "./previewContainer";
import { CssInfoPreview } from "./cssInformationPreview";
import './rightSideContainer.css';
import { StyleType } from "../../StyleType"; 

type TProps = {
    styles: StyleType,
    setCurrent: React.Dispatch<React.SetStateAction<HTMLElement>>
}

export const RightSide: React.FC<TProps> = React.memo((props) => {
    // function onClickOther() {
    //     let menu = document.querySelector('.menu') as HTMLElement;
    //     menu.classList.toggle('hide');
    // }

    function onClickBody(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        let element = e.target as HTMLElement;        
        props.setCurrent(element);
        // console.log(element);
    }

    window.addEventListener('message', event => {
        const stringNode = event.data.target;
        if (stringNode) {
            console.log(new DOMParser().parseFromString(stringNode, "text/html").firstChild);
        }
        // const node = new DOMParser().parseFromString(stringNode, "text/html").firstChild;
        // console.log(node);
        // props.setCurrent(event.data.target);
    });

    function onClickIframe(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        let element = e.target as HTMLElement;        
        props.setCurrent(element);
        console.log(element);
    }

    return (
        <div className="body-main" onClick={e => onClickBody(e)}>
            <h1 className="title">Try to change styles!</h1>
            <div className="div-title">div</div>
            <ul className="divs">
                <li><div className="div1">Button</div></li>
                <li><div className="div2">Button</div></li>
                <li><div className="div3">Button</div></li>
            </ul>
            <div className="span-title">span</div>
            <ul className="spans">
                <li><span className="span1">Span</span></li>
                <li><span className="span2">Span</span></li>
                <li><span className="span3">Span</span></li>
            </ul>
            <div className="li-title">link</div>
            <ul className="lis">
                <li><a href="#" className="li1">Link</a></li>
                <li><a href="#" className="li2">Link</a></li>
                <li><a href="#" className="li3">Link</a></li>
            </ul>
        </div>
    );
});
