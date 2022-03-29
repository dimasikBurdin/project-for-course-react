import React, { useState } from 'react';
import './App.css';
import { LeftSideContainer } from './components/leftContainer/leftSideContainer';
import { RightSide } from './components/rightContainer/rightSideContainer';
import {Space} from 'antd';

function App() {
  const [dataStyle, setDataStyle] = useState({
    backgroundColor:'black',
    color: 'white',
    fontSize: '16px',
    padding: '10px',
    borderRadius: '0px',
  })

  

  return (
    <div className='main'>
        <LeftSideContainer setStyles={setDataStyle}></LeftSideContainer>
        <RightSide styles={dataStyle}></RightSide>
    </div>
  );
}

export default App;
