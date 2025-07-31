import './index.css';

const EmojiCard = ({ emoji, onClickEmoji }) => {
  const { id, emojiUrl, emojiName } = emoji;

  const handleClick = () => {
    onClickEmoji(id);
  };

  return (
    <li className="emoji-item">
      <button
        type="button"
        className="emoji-btn"
        onClick={handleClick}
        aria-label={`Select ${emojiName} emoji`}
      >
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  );
};

export default EmojiCard;