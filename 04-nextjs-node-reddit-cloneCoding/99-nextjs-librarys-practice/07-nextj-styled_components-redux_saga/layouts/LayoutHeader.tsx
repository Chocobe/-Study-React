import Link from "next/link";
import styled from "styled-components";

const LayoutHeaderRoot = styled.div`
  padding: 12px 20px;
  
  font-size: 24px;
  font-weight: 700;
  text-align: end;
  background-color: ${({ theme }) => theme.colors.customGray03};
`;

function LayoutHeader() {
  return (
    <LayoutHeaderRoot>
      <Link href="/" passHref>
        <a>News List</a>
      </Link>
    </LayoutHeaderRoot>
  );
}

export default LayoutHeader;