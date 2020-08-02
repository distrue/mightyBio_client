import React from 'react';
import './App.css';
import image from './logo.png';

import MainPage from './main';
import ResultPage from './result';
import CloudPage from './cloud';
import UsagePage from './usage';

function App() {
  const [page, setPage] = React.useState(0);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="App-logo" alt="logo" />
        <div className="title">BioWave</div>
      </header>
      <div className="list">
        <div className="item" onClick={() => setPage(0)}>
          <div className="txt">실험 설계</div>
        </div>
        <div className="item" onClick={() => setPage(1)}>
          <div className="txt">결과 보기</div>
        </div>
        <div className="item" onClick={() => setPage(2)}>
          <div className="txt">BioWave<br/>클라우드</div>
        </div>
        <div className="item" onClick={() => setPage(3)}>
          <div className="txt">사용 방법</div>
        </div>
      </div>
      {page === 0? <MainPage></MainPage>:''}
      {page === 1? <ResultPage></ResultPage>: ''}
      {page === 2? <CloudPage></CloudPage>: ''}
      {page === 3? <UsagePage></UsagePage>: ''}
    </div>
  );
}

export default App;
