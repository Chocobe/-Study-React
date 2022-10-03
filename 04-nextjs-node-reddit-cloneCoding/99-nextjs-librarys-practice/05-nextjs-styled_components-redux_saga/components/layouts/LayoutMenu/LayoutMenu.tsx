import {
  useRef,
  useEffect,
} from "react";
import styled from "styled-components";
import LayoutMenuItem from "@components/layouts/LayoutMenu/LayoutMenuItem";
import { newsCategories } from "@constants";

const LayoutMenuRoot = styled.nav`
  width: fit-content;
  display: flex;
  gap: 1px;
  background-color: ${({ theme }) => theme.colors.gray02};
`;

export type LayoutMenuProps = {
  onChangeWidth: (width: string) => void;
}

function LayoutMenu(props: LayoutMenuProps) {
  const {
    onChangeWidth,
  } = props;
  
  const $root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { width } = $root.current!.getBoundingClientRect();
    onChangeWidth(`${width}px`);
  }, [onChangeWidth]);

  return (
    <LayoutMenuRoot ref={$root}>
      {newsCategories.map(category => (
        <LayoutMenuItem key={category}>
          {category}
        </LayoutMenuItem>
      ))}
    </LayoutMenuRoot>
  );
}

export default LayoutMenu;