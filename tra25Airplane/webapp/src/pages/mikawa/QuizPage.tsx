import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TimerComponent from '../../components/mikawa/TimerComponent';
import QuizGrid from '../../components/mikawa/QuizGrid';
import quizData from '../../components/mikawa/quizData';
import { 
  playCorrectSound, 
  playIncorrectSound,
  playBackgroundMusic 
} from '../../components/mikawa/AudioUtils';
import '../../styles/mikawa/QuizPage.css';

// Total time for quiz in seconds (5 minutes)
const TOTAL_TIME = 5 * 60;
// Penalty time per wrong answer in seconds
const PENALTY_TIME = 10;

const QuizPage: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [completedQuizzes, setCompletedQuizzes] = useState<number[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  
  const currentQuiz = quizData[currentQuizIndex];
  
  // Start background music when component mounts
  useEffect(() => {
    playBackgroundMusic('background.mp3');
    
    return () => {
      // Clean up audio when component unmounts
    };
  }, []);
  
  // Calculate grid size based on number of grid items
  const calculateGridSize = () => {
    const itemCount = currentQuiz.gridItems.length;
    if (itemCount === 81) return '9x9';
    return Math.sqrt(itemCount) === 9 ? '9x9' : '3x3';
  };
  
  // Apply time penalty
  const applyPenalty = (seconds: number) => {
    setTimeLeft(prev => Math.max(0, prev - seconds));
  };
  
  // Handle time up
  const handleTimeUp = () => {
    navigate('/mikawa/fail');
  };
  
  // Handle grid item selection
  const handleSelectionChange = (selected: string[]) => {
    setSelectedAnswers(selected);
  };
  
  // Check if answers are correct
  const checkAnswers = () => {
    setIsPaused(true);
    setShowFeedback(true);
    
    // Sort both arrays to ensure order doesn't matter
    const sortedSelected = [...selectedAnswers].sort();
    const sortedCorrect = [...currentQuiz.correctAnswers].sort();
    
    // Check if arrays have same length and same elements
    //const correct = sortedSelected.length === sortedCorrect.length &&
      //                sortedSelected.every((value, index) => value === sortedCorrect[index]);
      const correct = true;
    
    setIsCorrect(correct);
    
    if (correct) {
      try {
        playCorrectSound();
      } catch (err) {
        console.warn('Failed to play correct sound', err);
      }
      // Add to completed quizzes
      setCompletedQuizzes(prev => [...prev, currentQuiz.id]);
    } else {
      try {
        playIncorrectSound();
      } catch (err) {
        console.warn('Failed to play incorrect sound', err);
      }
      // Apply penalty
      applyPenalty(PENALTY_TIME);
    }
    
    // Clear feedback after a delay
    setTimeout(() => {
      setShowFeedback(false);
      setIsPaused(false);
      
      if (correct) {
        // Check if all quizzes are completed
        if (completedQuizzes.length + 1 >= quizData.length) {
          navigate('/mikawa/success');
        } else {
          // Find next unanswered quiz
          const newIndex = findNextUnansweredQuiz();
          setCurrentQuizIndex(newIndex);
          setSelectedAnswers([]);
        }
      } else {
        // Clear selection when answer is incorrect so user can try again
        setSelectedAnswers([]);
      }
    }, 2000);
  };
  
  // Find the next unanswered quiz
  const findNextUnansweredQuiz = (): number => {
    const updatedCompletedQuizzes = [...completedQuizzes, currentQuiz.id];
    
    for (let i = 0; i < quizData.length; i++) {
      if (!updatedCompletedQuizzes.includes(quizData[i].id)) {
        return i;
      }
    }
    
    // All quizzes completed, return current index as fallback
    return currentQuizIndex;
  };
  
  return (
    <div className="mikawa-app">
      <div className="quiz-page">
        <div className="quiz-window">
          <div className="window-header">
            <div className="window-title">七不思議解明プログラム - パスワード認証</div>
            <div className="window-controls">
              <span className="control minimize">-</span>
              <span className="control maximize">□</span>
              <span className="control close">×</span>
            </div>
          </div>
          
          <div className="window-content">
            <div className="quiz-header">
              <div className="progress">
                認証パスコード: {completedQuizzes.length}/{quizData.length}
              </div>
              <TimerComponent
                initialTime={timeLeft}
                onTimeUp={handleTimeUp}
                isPaused={isPaused}
                applyPenalty={applyPenalty}
              />
            </div>
            
            <div className="challenge">
              <h2>{currentQuiz.challenge}</h2>
            </div>
            
            <div className="quiz-grid-container">
              <QuizGrid
                gridItems={currentQuiz.gridItems}
                onSelectionChange={handleSelectionChange}
                disabled={showFeedback}
                size={calculateGridSize()}
                selectedItems={selectedAnswers} // Pass selected items to the grid
              />
            </div>
            
            {showFeedback && (
              <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
                <p>{isCorrect ? '正解！' : '不正解。再試行してください。'}</p>
              </div>
            )}
            
            <div className="controls">
              <button 
                className="submit-button"
                onClick={checkAnswers}
                disabled={selectedAnswers.length === 0 || showFeedback}
              >
                回答する
              </button>
            </div>
          </div>
          
          <div className="window-footer">
            <span>認証処理実行中...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;