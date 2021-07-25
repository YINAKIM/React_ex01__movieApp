import React from 'react';

function App() {
  return(<div className='App'/>);
  // return 이랑 같은 라인에 써야 return을 인식한다. ----> ERROR:return null
  // 여러줄 리턴하려면? return( ); 이렇게 하고 ()안에 쓰면 여러줄 리턴해도 에러 안남
}
export default App;
