import React, {
  //
} from "react";

import cls from "classnames";

export interface InputGroupProps {
  className?: string;
  type?: string;
  placeholder?: string;
  value: string;
  error: string | undefined;
  setValue: (value: string) => void;
}

const InputGroup: React.FC<InputGroupProps> = ({
  className = "mb-2",
  type = "text",
  placeholder = "",
  error,
  value,
  setValue,
}) => {
  return (
    <div
      className={className}
    >
      <input
        style={{
          minWidth: "300px",
        }}
        className={cls(
          "w-full p-3 transition duration-200 border border-gray-400 rounded bg-gray-50 focus:bg-white hover:bg-white",
          { "border-red-500": error }
        )}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
      />

      <small className="font-medium text-red-500">
        {error}
      </small>
    </div>
  );
};

export default InputGroup;