import React from 'react';

function Potato() {
    return <h4>Potato in JSX</h4> ;
}
function App() {
  return(
      <div>
        <h1> App() 컴포넌트! Potato추가 </h1>
          <Potato />
      </div>
  );
}
export default App;
