import React from 'react';

function Food({name, picture}) {
    return(
        <div>
            <h4>이름 : {name}</h4>
            <img src ={picture} alt={name} width="300px"/>
            <br/>
            <br/>
        </div>
    );
}


// 서버에서 데이터가 넘어온다고 가정, 변수하나 선언하고 빈 배열 할당해서 {name:'', image:''}가 들어있는 배열을 만든다, 이미지주소는 웹에서 복사해옴
const foodLike = [
    {name:'salad', image:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
    ,{name:'toast', image:'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80'}
    ,{name:'icecream', image:'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',}
    ,{name:'fruits', image:'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',}
];

// foodLike.map에 인자로 전달될 함수 : 음식요소를 렌더링하는 컴포넌트를 반환한다.
function renderFood(dish) {
    return <Food name={dish.name} picture={dish.image}/>;
}

function App() {
    return(
        <div>
            <h2> map() 에 인자로 Food컴포넌트에 props를 받아 컴포넌트를 반환하는 renderFood()를 받아 실행시킨다</h2>
          <hr/>
            {foodLike.map(renderFood)}
      </div>
  );
}
export default App;
