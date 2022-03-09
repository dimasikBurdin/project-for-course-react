import React from "react";
import { PreviewContainer } from "./previewContainer";
import { CssInfoPreview } from "./cssInformationPreview";
import { Space } from "antd";

export const RightSide: React.FC = React.memo(() => {
    return <>
        <Space style={{display:'flex', justifyContent:'center', backgroundColor:'red'}}>
            <PreviewContainer></PreviewContainer>
            <CssInfoPreview></CssInfoPreview>
        </Space>        
    </>
})