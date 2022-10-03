import { ReactNode } from "react";
import Link from "next/link";
import styled from "styled-components";
import { parseCamelToPascal } from "@utils";

const LayoutMenuItemRoot = styled.div`
  padding: 8px 12px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.blue01};
  cursor: pointer;
`;

export type LayoutMenuItemProps = {
  children: string;
};

function LayoutMenuItem({ children }: LayoutMenuItemProps) {
  const menuName = parseCamelToPascal(children);
  
  return (
    <Link href={`/${children}`}>
      <LayoutMenuItemRoot>
        {menuName}
      </LayoutMenuItemRoot>
    </Link>
  );
}

export default LayoutMenuItem;