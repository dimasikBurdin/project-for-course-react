import React from "react";
import { PreviewContainer } from "./previewContainer";
import { CssInfoPreview } from "./cssInformationPreview";
import { Space } from "antd";
import './rightSideContainer.css';

type TProps = {
    styles: {
        backgroundColor: string;
        color: string;
        fontSize: string;
        padding: string;
        borderRadius: string;
    }
}

export const RightSide: React.FC<TProps> = React.memo((props) => {
    return <div className="body-main">
        {/* <Space style={{display:'flex', justifyContent:'center', backgroundColor:'red'}}> */}
            <PreviewContainer styles={props.styles}></PreviewContainer>
            <CssInfoPreview></CssInfoPreview>
        {/* </Space>         */}
    </div>
})