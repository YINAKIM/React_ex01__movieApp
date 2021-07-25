import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <App />, // Compiled successfully!
    document.getElementById('root')
);


/******************************************************************************************
 <App /><Potato />, // ERROR :  Adjacent JSX elements must be wrapped in an enclosing tag.
 **** React는 최종으로 단 한개의 컴포넌트를 그려야 한다 ****

 그럼 Potato를 렌더링하려면?
 react가 렌더링하는 단하나의 컴포넌트가 작성된 function의 return(); 안에다 <Potato /> 로 추가해넣으면 된다
 왜냐면 리액트가 렌더링하는 컴포넌트가 정의된 function에 있는 return~~~; 이부분은 JSX니까

App.js에 import Potato~ 하고 이렇게 추가해넣으면

 return(
     <div>
     <h1> App() 컴포넌트! Potato추가</h1>
     <Potato />
     </div>
 );

 => 결과 렌더링
 App() 컴포넌트! Potato추가
 I love potato, this is Potato Component with JSX
 *******************************************************************************************/



