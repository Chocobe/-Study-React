import React from "react";

const ControlMenu = ({
  value,
  onChange,
  optionList,
  className,
}) => {
  return (
    <select
      value={value}
      onChange={({ target: { value }}) => onChange(value)}
      className={[
        "ControlMenu",
        className,
      ].join(" ")}
    >
      {
        optionList.map((option, idx) => (
          <option
            key={idx}
            value={option.value}
            className="ControlMenu-option"
          >
            {option.text}
          </option>
        ))
      }
    </select>
  );
};

ControlMenu.defaultProps = {
  optionList: [],
};

export default React.memo(ControlMenu);