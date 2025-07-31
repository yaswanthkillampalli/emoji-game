import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojis: [],
    isGameInProgress: true,
    score: 0,
    topScore: 0,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return [...emojisList].sort(() => Math.random() - 0.5)
  }

  onEmojiClick = id => {
    const {emojisList} = this.props
    const {clickedEmojis, score, topScore} = this.state
    const isEmojiClicked = clickedEmojis.includes(id)

    if (isEmojiClicked) {
      if (score > topScore) {
        this.setState({
          isGameInProgress: false,
          topScore: score,
        })
      } else {
        this.setState({isGameInProgress: false})
      }
    } else {
      const newScore = score + 1
      if (newScore === emojisList.length) {
        this.setState(prevState => ({
          clickedEmojis: [...prevState.clickedEmojis, id],
          score: newScore,
          isGameInProgress: false,
          topScore: newScore > topScore ? newScore : topScore,
        }))
      } else {
        this.setState(prevState => ({
          clickedEmojis: [...prevState.clickedEmojis, id],
          score: newScore,
        }))
      }
    }
  }

  onPlayAgain = () => {
    this.setState({
      clickedEmojis: [],
      isGameInProgress: true,
      score: 0,
    })
  }

  render() {
    const {score, topScore, isGameInProgress} = this.state
    const {emojisList} = this.props
    const shuffledEmojis = this.shuffledEmojisList()

    return (
      <div className="emoji-game-bg">
        <NavBar
          score={score}
          topScore={topScore}
          isGameInProgress={isGameInProgress}
        />
        <div className="emoji-game-content">
          {isGameInProgress ? (
            <ul className="emojis-list">
              {shuffledEmojis.map(emoji => (
                <EmojiCard
                  key={emoji.id}
                  emoji={emoji}
                  onClickEmoji={this.onEmojiClick}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              score={score}
              total={emojisList.length}
              isWon={score === emojisList.length}
              onPlayAgain={this.onPlayAgain}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
