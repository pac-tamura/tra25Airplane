import React, { useEffect, useState, useRef } from 'react';
import { playIncorrectSound } from './AudioUtils';

// XP style inline styles
const styles = {
  timer: {
    fontFamily: "'Tahoma', 'Segoe UI', sans-serif",
    fontSize: '15px',
    fontWeight: 'bold',
    padding: '5px 10px',
    border: '1px solid #7A98AF',
    borderRadius: '3px',
    backgroundColor: '#EFF3FF', // Light XP blue
    color: '#003399',
    boxShadow: 'inset 0 0 5px rgba(173, 216, 230, 0.3)',
    textAlign: 'center',
    transition: 'all 0.2s ease',
    margin: '5px 0',
    minWidth: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundImage: 'linear-gradient(to bottom, #FFFFFF 0%, #EFF3FF 100%)',
  },
  timerIcon: {
    //width: '16px',
    height: '16px',
    marginRight: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  warningTimer: {
    backgroundColor: '#FFF0F0',
    borderColor: '#E57373',
    color: '#CC0000',
    backgroundImage: 'linear-gradient(to bottom, #FFFFFF 0%, #FFF0F0 100%)',
  },
  criticalTimer: {
    backgroundColor: '#FF4040',
    borderColor: '#CC0000',
    color: '#FFFFFF',
    backgroundImage: 'linear-gradient(to bottom, #FF6060 0%, #E53935 100%)',
    textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)',
  },
  penaltyTimer: {
    backgroundColor: '#FFFF00',
    borderColor: '#FFC107',
    color: '#CC0000',
    backgroundImage: 'linear-gradient(to bottom, #FFFF77 0%, #FFFF00 100%)',
  },
  // XP style digital display
  digitalDisplay: {
    fontFamily: "'Courier New', monospace",
    letterSpacing: '1px',
  }
};

interface TimerComponentProps {
  initialTime: number; // in seconds
  onTimeUp: () => void;
  isPaused: boolean;
  applyPenalty?: (seconds: number) => void;
}

const TimerComponent: React.FC<TimerComponentProps> = ({ 
  initialTime,
  onTimeUp,
  isPaused,
  applyPenalty
}) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isWarning, setIsWarning] = useState(false);
  const [isCritical, setIsCritical] = useState(false);
  const [showPenalty, setShowPenalty] = useState(false);
  
  const lastWarningTimeRef = useRef(0);
  
  // Update local time when initialTime changes (e.g. from parent penalty)
  useEffect(() => {
    setTimeLeft(initialTime);
  }, [initialTime]);
  
  // Format time as MM:SS in XP style
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  // Check if timer should display warning (less than 60 seconds remaining)
  useEffect(() => {
    if (timeLeft <= 30) {
      setIsCritical(true);
      setIsWarning(true);
      
      // Play warning sound but not too frequently
      if (Date.now() - lastWarningTimeRef.current > 5000) {
        try {
          playIncorrectSound(); // Use incorrect sound for warning
          lastWarningTimeRef.current = Date.now();
        } catch (err) {
          console.warn('Failed to play warning sound', err);
        }
      }
    } else if (timeLeft <= 60) {
      setIsWarning(true);
      setIsCritical(false);
    } else {
      setIsWarning(false);
      setIsCritical(false);
    }
  }, [timeLeft]);
  
  // Timer countdown logic
  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [isPaused, onTimeUp]);
  
  // Effect to handle penalty display
  useEffect(() => {
    if (initialTime < timeLeft) {
      // When time is decreased externally via the initialTime prop
      setShowPenalty(true);
      const penaltyTimer = setTimeout(() => {
        setShowPenalty(false);
      }, 1000);
      
      return () => clearTimeout(penaltyTimer);
    }
  }, [initialTime, timeLeft]);
  
  const timerStyle = {
    ...styles.timer,
    ...(isWarning ? styles.warningTimer : {}),
    ...(isCritical ? styles.criticalTimer : {}),
    ...(showPenalty ? styles.penaltyTimer : {}),
  };
  
  // XP style label text based on remaining time
  const getStatusText = () => {
    if (isCritical) return "危険な状態";
    if (isWarning) return "警告";
    return "残り時間";
  };
  
  return (
    <div style={timerStyle} title={getStatusText()}>
      <div style={styles.timerIcon}>残り時間</div>
      <div style={styles.digitalDisplay}>
        {formatTime(timeLeft)}
      </div>
    </div>
  );
};

export default TimerComponent;