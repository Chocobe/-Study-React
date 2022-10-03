import React from "react";
import Link from "next/link";
import styled from "styled-components";

const LayoutHeaderRoot = styled.h1`
  padding: 12px 20px;
  font-size: 24px;
  text-align: end;
  background-color: ${({ theme }) => theme.colors.gray03};

  & > * {
    color: #fff;
    text-decoration: none;
  }
`;

function LayoutHeader() {
  return (
    <LayoutHeaderRoot>
      <Link href="/">
        News List
      </Link>
    </LayoutHeaderRoot>
  );
}

export default LayoutHeader;