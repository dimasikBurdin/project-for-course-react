import React from 'react';
import './App.css';
import { LeftSideContainer } from './components/leftContainer/leftSideContainer';
import { RightSide } from './components/rightContainer/rightSideContainer';
import {Space} from 'antd';

function App() {
  return (
    // <Space style={{margin:20, display:'flex', justifyContent:'center'}}>
    <div className='main'>
        <LeftSideContainer></LeftSideContainer>
        <RightSide></RightSide>
    </div>
    // </Space>
  );
}

export default App;
