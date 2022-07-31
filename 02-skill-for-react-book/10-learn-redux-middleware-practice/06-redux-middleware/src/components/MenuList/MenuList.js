import React, {
  useRef,
  useEffect,
} from "react";
import MenuListItem from "./MenuListItem";

import "./MenuList.scss";

const categories = [
  {
    id: 0,
    name: "Business",
    to: "/business",
  },
  {
    id: 1,
    name: "Entertainment",
    to: "/entertainment",
  },
  {
    id: 2,
    name: "Health",
    to: "/health",
  },
  {
    id: 3,
    name: "Science",
    to: "/science",
  },
  {
    id: 4,
    name: "Sports",
    to: "/sports",
  },
  {
    id: 5,
    name: "Technology",
    to: "/technology",
  },
];

const MenuList = ({
  setGlobalWidth,
}) => {
  /** @type { import("react").Ref<HTMLElement> } */
  const $menuList = useRef(null);
  
  useEffect(() => {
    const { width } = $menuList.current.getBoundingClientRect()
    setGlobalWidth(width);

    console.log("globalWidth: ", width);
  }, [setGlobalWidth]);
  
  return (
    <ul className="MenuList" ref={$menuList}>
      {categories.map(({
        id, name, to,
      }) => (
        <li key={id}>
          <MenuListItem to={to} name={name} />
        </li>
      ))}
    </ul>
  );
};

export default MenuList;