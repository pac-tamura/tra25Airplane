import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { stopBackgroundMusic, playIncorrectSound } from '../../components/mikawa/AudioUtils';
import '../../styles/mikawa/FailPage.css';

const FailPage: React.FC = () => {
  const navigate = useNavigate();
  
  // Return to top page
  const handleReturnToTop = () => {
    stopBackgroundMusic();
    navigate('/mikawa');
  };
  
  // Add error sound effect
  useEffect(() => {
    // Play error sound
    playIncorrectSound();
    
    return () => {
      stopBackgroundMusic();
    };
  }, []);
  
  return (
    <div className="mikawa-app">
      <div className="fail-page">
        <div className="fail-window fail-animation">
          <div className="window-header">
            <div className="window-title">七不思議解明プログラム - エラー</div>
            <div className="window-controls">
              <span className="control minimize">-</span>
              <span className="control maximize">□</span>
              <span className="control close">×</span>
            </div>
          </div>
          
          <div className="window-content">
            <div className="fail-dialog">
              <div className="fail-dialog-header">
                <div className="fail-icon"></div>
                <div className="fail-dialog-title">認証失敗</div>
              </div>
              
              <div className="fail-dialog-content">
                <p>制限時間内にすべてのパスコードを認証できませんでした。</p>
                <p>システムへのアクセスは拒否されました。</p>
                <p>再試行するには、「最初からやり直す」をクリックしてください。</p>
              </div>
              
              <div className="fail-button-container">
                <button className="retry-button" onClick={handleReturnToTop}>
                  最初からやり直す
                </button>
              </div>
            </div>
          </div>
          
          <div className="window-footer">
            <span>エラーコード: 0x80070057</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FailPage;