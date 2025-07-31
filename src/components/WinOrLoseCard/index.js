import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import './index.css';

const WIN_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png';
const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png';

const WinOrLoseCard = ({ score, total, isWon, onPlayAgain }) => {
  const title = isWon ? 'You Won!' : 'You Lose';
  const displayScoreLabel = isWon ? 'Best Score' : 'Score';
  const image = isWon ? WIN_IMAGE : LOSE_IMAGE;
  const alt = isWon ? 'win' : 'lose';

  // Trigger confetti for win state
  useEffect(() => {
    if (isWon) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff6b6b', '#6b48ff', '#f8b4d4'],
      });
    }
  }, [isWon]);

  return (
    <div className={`win-lose-card ${isWon ? 'won' : 'lost'}`}>
      <div className="result-text-container">
        <h1 className="result-title">{title}</h1>
        <p className="result-score-label">{displayScoreLabel}</p>
        <p className="result-score-value">
          {score}/{total}
        </p>
        <button
          type="button"
          className="play-again-btn"
          onClick={onPlayAgain}
          aria-label="Play Again"
        >
          Play Again
        </button>
      </div>
      <img className="win-lose-img" src={image} alt={alt} />
    </div>
  );
};

export default WinOrLoseCard;