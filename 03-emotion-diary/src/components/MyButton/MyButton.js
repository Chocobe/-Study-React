import "./MyButton.css";

const MyButton = ({
  type, onClick, children
}) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";
  
  return (
    <button
      className={[
        "MyButton",
        `MyButton_${btnType}`
      ].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

MyButton.defaultProps = {
  type: "default",
  children: "MyButton Component",
};

export default MyButton;