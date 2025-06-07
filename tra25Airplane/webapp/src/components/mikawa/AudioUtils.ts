// Audio utility functions

// Audio players
let backgroundMusic: HTMLAudioElement | null = null;
let soundEffect: HTMLAudioElement | null = null;

// Base path for audio files
const AUDIO_BASE_PATH = '/src/assets/audio/';

// Available audio files (to avoid loading non-existent files)
const AVAILABLE_AUDIO = ['background.mp3', 'correct.mp3', 'incorrect.mp3', 'startup.mp3', 'success.mp3'];

// Check if an audio file exists in our known list
const audioExists = (filename: string): boolean => {
  return AVAILABLE_AUDIO.includes(filename);
};

// Play background music
export const playBackgroundMusic = (music: string = 'background.mp3') => {
  if (backgroundMusic) {
    backgroundMusic.pause();
    backgroundMusic = null;
  }
  
  if (!audioExists(music)) {
    console.warn(`Audio file ${music} not found, using default instead`);
    music = 'background.mp3';
  }
  
  try {
    backgroundMusic = new Audio(`${AUDIO_BASE_PATH}${music}`);
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.3;
    
    // Promise-based play with fallback
    const playPromise = backgroundMusic.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.error('Background audio playback failed:', error);
      });
    }
  } catch (error) {
    console.error('Failed to initialize background audio:', error);
  }
};

// Stop background music
export const stopBackgroundMusic = () => {
  if (backgroundMusic) {
    backgroundMusic.pause();
    backgroundMusic = null;
  }
};

// Set volume for background music
export const setBackgroundMusicVolume = (volume: number) => {
  if (backgroundMusic) {
    backgroundMusic.volume = Math.max(0, Math.min(1, volume));
  }
};

// Play sound effect
export const playSoundEffect = (sound: string, volume: number = 0.5) => {
  if (soundEffect) {
    soundEffect.pause();
  }
  
  if (!audioExists(sound)) {
    console.warn(`Audio file ${sound} not found, using default instead`);
    sound = 'correct.mp3'; // Default fallback sound
  }
  
  try {
    soundEffect = new Audio(`${AUDIO_BASE_PATH}${sound}`);
    soundEffect.volume = volume;
    
    // Promise-based play with fallback
    const playPromise = soundEffect.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.error('Sound effect playback failed:', error);
      });
    }
  } catch (error) {
    console.error('Failed to initialize sound effect:', error);
  }
};

// Pre-defined sound effects
export const playCorrectSound = () => playSoundEffect('correct.mp3', 0.5);
export const playIncorrectSound = () => playSoundEffect('incorrect.mp3', 0.5);
export const playSuccessSound = () => playSoundEffect('success.mp3', 0.6);
export const playStartupSound = () => playSoundEffect('startup.mp3', 0.5);
export const playButtonClickSound = () => playSoundEffect('correct.mp3', 0.3); // Fallback to existing sound
export const playTimerWarningSound = () => playSoundEffect('incorrect.mp3', 0.4); // Fallback to existing sound

// Check if audio is supported in the current browser
export const isAudioSupported = (): boolean => {
  try {
    const audio = new Audio();
    return typeof audio.canPlayType === 'function';
  } catch (e) {
    return false;
  }
};

// Preload common audio files
export const preloadAudio = (): void => {
  if (!isAudioSupported()) return;
  
  AVAILABLE_AUDIO.forEach(sound => {
    const audio = new Audio();
    audio.src = `${AUDIO_BASE_PATH}${sound}`;
    // Just setting the src will begin the fetch, without playing
  });
};