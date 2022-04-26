import React from "react";
import { StyleType } from "../../StyleType";

type TProps = {
    styles: StyleType
}

export const PreviewContainer: React.FC<TProps> = React.memo((props) => {
    return <div className="body-main__preview preview">
        <div className="preview__header">Preview</div>
        <div className="preview__body">
            {/* <div className="preview_btn" style={props.styles}> */}
            <div className="preview_btn">
                Some text
            </div>
        </div>
        
    </div>
})