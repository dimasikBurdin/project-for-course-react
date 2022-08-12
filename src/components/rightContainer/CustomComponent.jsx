import { useEffect, useRef } from "react";
import imgPath from './img.jpg';

export default function CustomComponent(props) {
    const { values, text, selectRef, tagName } = props;
    console.log('tagName :>> ', tagName);
    const getElement = (tagName) => {
        switch (tagName) {
            case 'div':
                return <div className="custom-component" style={{ ...values }}>{text}</div>
            case 'p':
                return <p className="custom-component" style={{ ...values }}>{text}</p>
            case 'a':
                return <a className="custom-component" style={{ ...values }}>{text}</a>
            case 'img':
                return <img src={imgPath} className="custom-component" style={{ ...values }} alt=''></img>
            default:
                return <span></span>;
        }
    }
    let tag = selectRef.value;
    let wrapper = useRef();
    useEffect(() => {
        const element = document.createElement('div');
        element.classList.add('custom-component');
        element.style = { ...values };
        // wrapper.innerHTML = element;
    }, []);
    return (
        <>
            <div ref={wrapper} className="wrapper">
                {getElement(tagName)}

            </div>
            {/* <p className='custom-component' style={{ ...values }}>{text}</p> */}
        </>
    )
};
