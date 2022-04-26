import React, { useEffect, useState } from 'react';
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
  const [dataStyle, setDataStyle] = useState(initData);
  let init : HTMLElement = document.createElement('div');
  const [currentElement, setCurrentElement] = useState(init);

  useEffect(() => {
    if(!currentElement.className) return
    console.log('change current')
    let curStyles = document.defaultView?.getComputedStyle(currentElement) as CSSStyleDeclaration;
    currentElement.style.border = '2px solid red'
    setDataStyle({
      backgroundColor: curStyles.backgroundColor,
      borderRadius: curStyles.borderRadius,
      color: curStyles.color,
      fontSize: curStyles.fontSize,
      height: curStyles.height,
      padding: curStyles.padding,
      width: curStyles.width
    });

    return () => {currentElement.style.border = 'none'};
  }, [currentElement]);

  useEffect(() => {
      for(let e of Object.keys(dataStyle)) {
        //@ts-ignore
        currentElement.style[e] = dataStyle[e]
      }
  }, [dataStyle])

  return (
    <div className='main' >
        <LeftSideContainer setStyles={setDataStyle} styles={dataStyle} />
        <RightSide styles={dataStyle} setCurrent={setCurrentElement} />
    </div>
  );
}

export default App;
