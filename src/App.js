import React from 'react';

function Food(props) {
     console.log(props); // {fav: "Kimchi", something: true, papapapa: Array(6)} 가 넘어온다
     // props를 인자로 받는 컴포넌트를 React가 렌더링하는 컴포넌트에 넣었다는 것은 ---> props를 속성으로 가지는 Object가 출력되는 것

     return <h4>Props나와라 => {props.fav}</h4> ; // Props나와라 => Kimchi , 근데 true, false값은 안나온다(props.something은 암것도 출력안됨)
}

function Food2({fav}) {
     console.log({fav}); // {fav: "Kimchi", something: true, papapapa: Array(6)} 가 넘어온다
     // props를 인자로 받는 컴포넌트를 React가 렌더링하는 컴포넌트에 넣었다는 것은 ---> props를 속성으로 가지는 Object가 출력되는 것

     return <h4>Props나와라 => {fav}</h4> ; // Props나와라 => Kimchi , 근데 true, false값은 안나온다(props.something은 암것도 출력안됨)

    // 참고, ES6 구조분해할당 문법 : 책에서는 76p 에서 이렇게 써도 된다는데 syntax error -> 사용법 알아보고 다시 해보기
    // { fav } = props;
    // return <h1>{fav}</h1>;
}

function App() {
  return(
      <div>
        <h1> App() 컴포넌트! Food 추가 - 여러개의 컴포넌트에서 props사용하기</h1>
        <Food fav="Kimchi" something={false} papapapa={['hello',1,2,3,4,false]}/>
          <hr/>
          <Food2 fav="kimchi"/>
          <Food2 fav="rice"/>
          <Food2 fav="sea weed"/>
      </div>
  );
}
export default App;
