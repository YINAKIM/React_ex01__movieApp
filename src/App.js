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


// 각 요소에 유일한 key값 넣어주기 : map()로 렌더링 될 때 반환되는 컴포넌트들 각각을 react가 식별하기 위해 key값이 필요
const foodLike = [
    {id:1, name:'salad', image:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
    ,{id:2, name:'toast', image:'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80'}
    ,{id:3, name:'icecream', image:'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',}
    ,{id:4, name:'fruits', image:'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',}
];

function App() {
    return(
        <div>
            <h1> map() 사용하여 비슷한 컴포넌트 여러개 만들기</h1>
          <hr/>
            {/* map()로 렌더링 될 때 반환되는 컴포넌트들 각각을 react가 식별하기 위해 key값이 필요한 것이다.*/}
            {foodLike.map(dish=>(
                <Food key={dish.id} name={dish.name} picture={dish.image} />
                )
             )}
      </div>
  );
}
export default App;
