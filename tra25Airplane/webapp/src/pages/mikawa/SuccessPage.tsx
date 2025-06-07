import React, { useState, useEffect } from 'react';
import { 
  playStartupSound, 
  stopBackgroundMusic,
  playSuccessSound
} from '../../components/mikawa/AudioUtils';
import '../../styles/mikawa/SuccessPage.css';

const SuccessPage: React.FC = () => {
  const [isStarting, setIsStarting] = useState(false);
  const [startComplete, setStartComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // Stop background music when component mounts
  useEffect(() => {
    return () => {
      stopBackgroundMusic();
    };
  }, []);
  
  // Handle startup process
  const handleStartup = () => {
    setIsStarting(true);
    stopBackgroundMusic();
    
    try {
      // Use correct sound for startup
      playStartupSound();
    } catch (err) {
      console.warn('Failed to play startup sound', err);
    }
    
    // Progress timer for startup animation
    const startupTime = 14000; // 14 seconds
    const intervalTime = 100; // update every 100ms
    const totalSteps = startupTime / intervalTime;
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min(100, (currentStep / totalSteps) * 100));
      
      if (currentStep >= totalSteps) {
        clearInterval(timer);
        setStartComplete(true);
        // Play success sound when startup completes
        try {
          playSuccessSound();
        } catch (err) {
          console.warn('Failed to play success sound', err);
        }
      }
    }, intervalTime);
  };
  
  return (
    <div className="mikawa-app">
      <div className="success-page">
        <div className="success-window">
          <div className="window-header">
            <div className="window-title">七不思議解明プログラム - 認証成功</div>
            <div className="window-controls">
              <span className="control minimize">-</span>
              <span className="control maximize">□</span>
              <span className="control close">×</span>
            </div>
          </div>
          
          <div className="window-content">
            <div className="success-icon"></div>
            
            {!isStarting && (
              <div className="success-message">
                <h1>認証成功</h1>
                <p>すべてのパスコードが正常に認証されました。</p>
                <p>システムを起動する準備が整いました。</p>
                
                <button className="startup-button" onClick={handleStartup}>
                  起動しますか？
                </button>
              </div>
            )}
            
            {isStarting && !startComplete && (
              <div className="startup-progress">
                <h2>起動中...</h2>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="progress-percent">{Math.floor(progress)}%</p>
              </div>
            )}
            
            {startComplete && (
              <div className="startup-complete">
                <h1>起動に成功しました</h1>
                <p>七不思議解明システムが正常に起動しました。</p>
                <p>これで七不思議の解明に進むことができます。</p>
                <div className="success-animation"></div>
              </div>
            )}
          </div>
          
          <div className="window-footer">
            <span>{isStarting ? (startComplete ? "準備完了" : "処理中...") : "待機中"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;