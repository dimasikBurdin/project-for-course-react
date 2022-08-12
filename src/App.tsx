import React, { useEffect, useState } from 'react';
import './App.css';
import { LeftSideContainer } from './components/leftContainer/leftSideContainer';
import { RightSide } from './components/rightContainer/rightSideContainer';
import { Space } from 'antd';
import { StyleType } from './StyleType';

let isCalled = false;

function App() {
  let initData: StyleType = {
    backgroundColor: 'black',
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
  let init: HTMLElement = document.createElement('div');
  const [currentElement, setCurrentElement] = useState(init);

  useEffect(() => {
    if (!currentElement.className) return;
    console.log('change current');
    let curStyles = document.defaultView?.getComputedStyle(currentElement) as CSSStyleDeclaration;
    currentElement.style.outline = '4px solid rgba(0, 0, 255, 0.5)';
    setDataStyle({
      backgroundColor: curStyles.backgroundColor,
      borderRadius: curStyles.borderRadius,
      color: curStyles.color,
      fontSize: curStyles.fontSize,
      height: curStyles.height,
      padding: curStyles.padding,
      width: curStyles.width,
    });

    return () => { currentElement.style.outline = 'none' };
  }, [currentElement]);

  useEffect(() => {
    for (let e of Object.keys(dataStyle)) {
      //@ts-ignore
      currentElement.style[e] = dataStyle[e]
    }
  }, [dataStyle]);

  // if (!isCalled) {
  //   // @ts-ignore
  //   setTimeout(() => {
  //     setResetStyles(setDataStyle, initData);
  //     console.log('внутри if');
  //   }, 5000);
  // }
  // isCalled = true;

  setResetStyles(setDataStyle, initData);

  return (
    <div className='main' >
      <LeftSideContainer setStyles={setDataStyle} styles={dataStyle} />
      <RightSide styles={dataStyle} setCurrent={setCurrentElement} />
    </div>
  );
}

// @ts-ignore
function setResetStyles(setDataStyle, initData) {
  document.querySelector('#reset')?.addEventListener('click', (e) => {
    // @ts-ignore
    setDataStyle(initData);
    console.log('set')
  });
}


export default App;
