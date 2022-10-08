import React from "react";
import Link from "next/link";
import styled from "styled-components";

export type MenuItemProps = {
  name: string;
  href: string;
};

const MenuItemRoot = styled.a`
  display: inline-block;

  padding: 8px 12px;
  color: #fff;
  font-weight: 600;

  background-color: ${({ theme }) => theme.colors.customBlue01};
`;

function MenuItem(props: MenuItemProps) {
  const { name, href } = props;
  
  return (
    <Link href={href} passHref>
      <MenuItemRoot>{name}</MenuItemRoot>
    </Link>
  );
}

export default React.memo(MenuItem);