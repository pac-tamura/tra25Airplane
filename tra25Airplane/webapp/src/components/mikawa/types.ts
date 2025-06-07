// Quiz game data types

// Grid item can be either text or image
export interface GridItem {
  type: 'text' | 'image';
  content: string; // Text content or image URL
}

// Quiz data structure
export interface QuizData {
  id: number;
  challenge: string;
  type: 'text' | 'image'; // Type of challenge
  gridItems: GridItem[];
  answerType: 'single' | 'multiple' | 'pattern';
  correctAnswers: string[]; // IDs of correct grid items
}

// Game state
export interface GameState {
  currentQuiz: number;
  remainingTime: number;
  completedQuizzes: number[];
  isSuccess: boolean;
  isGameOver: boolean;
}