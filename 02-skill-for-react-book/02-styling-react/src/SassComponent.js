import "./SassComponent.scss";

const SassComponent = () => {
  const boxList = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];
  
  return (
    <div className="SassComponent">
      {boxList.map((name, idx) => (
        <div key={idx} className={`box ${name}`} />
      ))}
    </div>
  );
};

export default SassComponent;