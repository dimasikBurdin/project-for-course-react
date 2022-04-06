import React from "react";
import { PreviewContainer } from "./previewContainer";
import { CssInfoPreview } from "./cssInformationPreview";
import { Space } from "antd";
import './rightSideContainer.css';
import { StyleType } from "../../StyleType"; 

type TProps = {
    styles: StyleType
}

export const RightSide: React.FC<TProps> = React.memo((props) => {
    return <div className="body-main">
        <PreviewContainer styles={props.styles}></PreviewContainer>
        <CssInfoPreview styles={props.styles}></CssInfoPreview>
    </div>
})