import React from 'react';
import hw from './hw1.png';
import './usage.css';

const UsagePage = () => {
    return(<div className="usage">
        <div className="ustitle">하드웨어 조립 가이드</div>
        <img className="imga" src={hw}/>
        <div className="desc">로터 모듈을 중앙 모듈에 결합해주세요</div>
    </div>);
}

export default UsagePage;
