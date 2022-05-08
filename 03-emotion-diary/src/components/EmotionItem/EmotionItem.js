import "./EmotionItem.css";

const EmotionItem = ({
  emotionId, emotionImg, emotionDescription, isSelected,
  onClick, className,
}) => {
  return (
    <div
      onClick={() => onClick(emotionId)}
      className={[
        "EmotionItem",
        isSelected
          ? `EmotionItem-on-${emotionId}`
          : `EmotionItem-off`,
        className,
      ].join(" ")}
    >
      <img 
        src={emotionImg} 
        alt={emotionDescription} 
        className="EmotionItem-img"
      />
      
      <span className="EmotionItem-description">
        {emotionDescription}
      </span>
    </div>
  );
};

export default EmotionItem;