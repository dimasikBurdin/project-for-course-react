import React from "react";
import { StyleType } from "../../StyleType";

type TProps = {
    styles: StyleType
}

export const PreviewContainer: React.FC<TProps> = React.memo((props) => {
    return <div className="body-main__preview preview">
        <div className="preview__header">Preview</div>
        <div className="preview__body">
            <div className="preview_btn" style={props.styles}>
                Some text
            </div>
        </div>
        <div className="preview__colors colors-preview">
            <ul className="colors-preview">
                {/* <li className="colors-preview__item"></li>
                <li className="colors-preview__item"></li>
                <li className="colors-preview__item"></li>
                <li className="colors-preview__item"></li>
                <li className="colors-preview__item">
                    <input className="colors-preview_code" type="text" name="" id="" />
                </li> */}
            </ul>
        </div>
    </div>
})