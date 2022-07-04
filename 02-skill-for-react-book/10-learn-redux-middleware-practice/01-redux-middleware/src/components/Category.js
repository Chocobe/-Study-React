import React, {
  useState,
} from "react";

import "./Category.scss";

const Category = ({
  number,
  setNumber,
  category,
  onChangeCategory,
}) => {
  const [list] = useState([
    "NEWS",
    "NEWEST",
    "ASK",
    "SHOW",
    "JOBS",
  ]);

  return (
    <div className="Category">
      <div>
        번호:
        <input 
          type="number"
          value={number} 
          onInput={e => setNumber(e.target.value)} 
        />
      </div>
      
      {list.map(name => (
        <button 
          key={name}
          onClick={() => onChangeCategory(name)}
          className={[
            "button",
            category === name ? " active" : ""
          ].join("")}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default Category;