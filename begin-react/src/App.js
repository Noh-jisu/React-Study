import React from "react";
import Hello from "./Hello";
import './App.css'; 

function App() {
  const name = 'react';
  const style = {
    backgroundColor : 'black',
    color : 'aqua',
    fontSize : 24,
    padding : '1rem'
  }
  return (
    <>
      {/* 주석을 사용할땐 {}안에 /+* 로 작성 */}
      <Hello 
        // 태그가 열리는부분에서 싱글라인태그도 사용 가능
      />
      {/* JSX내부에서 JavaScript값을 사용하는 방법 */}
      <div style={style}>{name}</div>
      {/* 외부 styleSheet사용 예시 */}
      <div className="gray-box"></div>
    </>
  );
}

export default App;
