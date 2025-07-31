import { useState, useEffect } from 'react';
import './index.css';

const NavBar = ({ score, topScore, isGameInProgress }) => {
  const [animateScore, setAnimateScore] = useState(false);
  const [animateTopScore, setAnimateTopScore] = useState(false);

  useEffect(() => {
    if (score > 0) {
      setAnimateScore(true);
      const timeout = setTimeout(() => setAnimateScore(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [score]);

  useEffect(() => {
    if (topScore > 0) {
      setAnimateTopScore(true);
      const timeout = setTimeout(() => setAnimateTopScore(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [topScore]);

  return (
    <nav className="navbar">
      <div className="navbar-logo-row">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="emoji-game-title">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="navbar-score-row">
          <p className={`navbar-score-text ${animateScore ? 'animate' : ''}`}>
            Score: <span>{score}</span>
          </p>
          <p className={`navbar-score-text ${animateTopScore ? 'animate' : ''}`}>
            Top Score: <span>{topScore}</span>
          </p>
        </div>
      )}
    </nav>
  );
};

export default NavBar;