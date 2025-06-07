import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { playBackgroundMusic, playButtonClickSound } from '../../components/mikawa/AudioUtils';
import '../../styles/mikawa/MikawaProgram.css';

const MikawaProgram: React.FC = () => {
  const navigate = useNavigate();
  const [isStarting, setIsStarting] = useState(false);

  const handleStart = () => {
    setIsStarting(true);
    playButtonClickSound();
    playBackgroundMusic('background.mp3');
    
    // Short delay before navigating to quiz page
    setTimeout(() => {
      navigate('/mikawa/quiz');
    }, 1000);
  };

  return (
    <div className="mikawa-app">
      <div className="mikawa-container">
        <div className="mikawa-window">
          <div className="window-header">
            <div className="window-title">七不思議解明プログラム（Mikawa program.）</div>
            <div className="window-controls">
              <span className="control minimize">-</span>
              <span className="control maximize">□</span>
              <span className="control close">×</span>
            </div>
          </div>
          
          <div className="window-content">
            <div className="program-icon"></div>
            <h1>七不思議解明プログラム</h1>
            <p className="description">
              このプログラムは七不思議を解明するための特殊なシステムです。
              正しいパスコードを全て入力する必要があります。
            </p>
            
            <div className="instruction-box">
              <h2>起動条件</h2>
              <ul>
                <li>全10問のパスコード認証をクリアする必要があります</li>
                <li>制限時間は<strong>5分</strong>です</li>
                <li>誤った回答をするとペナルティとして<strong>10秒</strong>の時間が減少します</li>
                <li>全てのパスコードを解除しなければシステムは起動しません</li>
                <li>複数の選択肢から正解を選ぶ必要があります（複数選択問題あり）</li>
              </ul>
            </div>
            
            <div className="warning-box">
              <p>
                <strong>注意：</strong>
                制限時間内にすべてのパスコードを解除できなかった場合、
                システムへのアクセス権は剥奪され、七不思議の解明はできません。
              </p>
            </div>
            
            <div className="button-container">
              <button 
                className={`start-button ${isStarting ? 'starting' : ''}`}
                onClick={handleStart}
                disabled={isStarting}
              >
                {isStarting ? '起動中...' : '起動する'}
              </button>
            </div>
          </div>
          
          <div className="window-footer">
            <span>準備完了</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MikawaProgram;