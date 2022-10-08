import React from "react";
import Link from "next/link";
import styled from "styled-components";

const HeaderLayoutRoot = styled.a`
  padding: 12px 20px;
  width: 100%;

  color: #fff;
  text-align: end;
  font-size: 24px;
  font-weight: 700;

  background-color: ${({ theme }) => theme.colors.customGray03};
`

function HeaderLayout() {
  return (
    <Link href="/" passHref>
      <HeaderLayoutRoot>
        New List
      </HeaderLayoutRoot>
    </Link>
  );
}

export default React.memo(HeaderLayout);