import React from 'react';
import img1 from './bg1.png';
import img2 from './bg2.png';
import gra1 from './gra1.png';
import gra2 from './gra2.png';
import './result.css';

const ResultPage = () => {
    return(<div className="Result">
        <div className="res">
            <div className="restitle">1. 세포 A에 대한 결과</div>
            <div className="items">
                <div className="item">
                    <img src={img1}/>
                    <div>페니실린 처리 전 세포 A 배지 사진</div>
                </div>
                <div className="item">
                    <img src={img2}/>
                    <div>페니실린 처리 후 세포 A 배지 사진</div>
                </div>
            </div>
        </div>
        <div className="ana">
            <div className="restitle">2. 세포 A의 DNA 양 분석</div>
            <img src={gra1}/>      
            <div>세포 A의 시료에 따른 흡광도</div> 
            <img src={gra2}/>
            <div>페놀 농도에 따른 세포 A의 흡광도 그래프</div>
        </div>
    </div>);
}

export default ResultPage;
