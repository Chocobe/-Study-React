import "./MyHeader.css";

const MyHeader = ({ leftChild, rightChild, children }) => {
  return (
    <header className="MyHeader">
      <div className="MyHeader-leftSide">
        {leftChild}
      </div>

      <div className="MyHeader-text">
        {children}
      </div>

      <div className="MyHeader-rightSide">
        {rightChild}
      </div>
    </header>
  )
};

MyHeader.defaultProps = {
  children: "MyHeader Default Text",
}

export default MyHeader;