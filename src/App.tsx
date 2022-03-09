import React from 'react';
import './App.css';
import { LeftSideContainer } from './components/leftSideContainer';
import { RightSide } from './components/rightSideContainer';
import {Space} from 'antd';

function App() {
  return (
    <Space style={{margin:20, display:'flex', justifyContent:'center'}}>
        <LeftSideContainer></LeftSideContainer>
        <RightSide></RightSide>
    </Space>
  );
}

export default App;
