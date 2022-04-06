import React from "react";
import { StyleType } from "../../StyleType";

type TProps = {
    styles: StyleType
}

export const CssInfoPreview:React.FC<TProps> = React.memo((props) => {
    return <>
        <div className="body-main__preview preview preview_copy">
            <div className="preview__header">CSS</div>
            <div className="preview__body preview__body_padding">
                <div className="preview__text">
                    {JSON.stringify(props.styles)}
                    {/* .button &#123;margin-top: 20px; background-color: white;&#125;
                    .button &#123;margin-top: 20px; background-color: white;&#125; */}
                </div>
            </div>
            <div className="preview__btn">
                <button className="preview__link">Copy to clipboard</button>
            </div>
        </div>
        <div className="body-main__copy"></div>
    </>
})