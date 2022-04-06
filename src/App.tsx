import React, { useState } from 'react';
import './App.css';
import { LeftSideContainer } from './components/leftContainer/leftSideContainer';
import { RightSide } from './components/rightContainer/rightSideContainer';
import {Space} from 'antd';
import { StyleType } from './StyleType';

function App() {
  let initData : StyleType = {
    backgroundColor:'black',
    color: 'white',
    fontSize: '16px',
    padding: '10px',
    borderRadius: '10px',
    width: 'auto',
    height: 'auto',
    // textAlign: 'center',
    // verticalAlign: 'middle'
    
  }
  const [dataStyle, setDataStyle] = useState(initData)

  return (
    <div className='main' >
        <LeftSideContainer setStyles={setDataStyle} styles={dataStyle} />
        <RightSide styles={dataStyle} />
    </div>
  );
}

export default App;
