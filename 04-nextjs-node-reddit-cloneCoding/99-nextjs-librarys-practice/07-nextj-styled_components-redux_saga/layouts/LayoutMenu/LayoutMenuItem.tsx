import React, {
  ReactNode
} from "react";
import Link from "next/link";
import styled from "styled-components";

const LayoutMenuItemLink = styled.a`
  padding: 8px 12px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.customBlue01};
`;

export type LayoutMenuItemProps = {
  href: string;
  children: ReactNode;
};

function LayoutMenuItem({ href, children }: LayoutMenuItemProps) {
  return (
    <Link href={href} passHref>
      <LayoutMenuItemLink>
        {children}
      </LayoutMenuItemLink>
    </Link>
  );
}

export default React.memo(LayoutMenuItem);