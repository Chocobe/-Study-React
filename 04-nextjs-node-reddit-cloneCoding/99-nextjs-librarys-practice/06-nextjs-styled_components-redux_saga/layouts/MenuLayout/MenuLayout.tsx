import React, {
  useRef,
  useEffect,
} from "react";
import MenuItem from "./MenuItem";
import menuItems from "./entities";
import styled from "styled-components";

const MenuLayoutRoot = styled.div`
  width: fit-content;
  display: flex;
`

export type MenuLayoutProps = {
  onMounted: (width: number) => void;
};

function MenuLayout(props: MenuLayoutProps) {
  const { onMounted } = props;
  
  const $menuLayout = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const { width } = $menuLayout.current!.getBoundingClientRect();
    onMounted(width);
  }, [onMounted]);
  
  return (
    <MenuLayoutRoot ref={$menuLayout}>
      {menuItems.map(({ name, href }) => (
        <MenuItem
          key={name}
          name={name}
          href={href}
        />
      ))}
    </MenuLayoutRoot>
  );
}

export default MenuLayout;