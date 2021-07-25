// Potato라는 컴포넌트를 Potato.js에 JSX문법을 사용해서 작성하기(js파일이지만 앞글자 꼭 대문자로!)

import React from "react"; // 이 코드를 입력해야 JSX가 인식할 수 있는 파일이 된다

function Potato(){
    return <h3>I love potato, this is Potato Component with JSX</h3>;
    // 여기 return ~ ; 는 HTML처럼 생겼지만 JSX다
}

export default Potato;

