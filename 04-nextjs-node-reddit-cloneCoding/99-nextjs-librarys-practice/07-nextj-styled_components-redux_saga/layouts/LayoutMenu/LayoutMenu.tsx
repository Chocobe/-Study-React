import {
  useRef,
  useEffect,
} from "react";
import menuItems from "./constants";
import styled from "styled-components";

import LayoutMenuItem from "./LayoutMenuItem";

const LayoutMenuRoot = styled.div`
  width: fit-content;
`;

export type LayoutMenuProps = {
  onMounted: (width: string) => void;
};

function LayoutMenu({ onMounted }: LayoutMenuProps) {
  const $layoutMenu = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const { width } = $layoutMenu.current!.getBoundingClientRect();

    onMounted(`${width}px`);
  }, [onMounted]);
  
  return (
    <LayoutMenuRoot ref={$layoutMenu}>
      {menuItems.map(({ href, name }) => (
        <LayoutMenuItem key={name} href={href}>
          {name}
        </LayoutMenuItem>
      ))}
    </LayoutMenuRoot>
  );
}

export default LayoutMenu;