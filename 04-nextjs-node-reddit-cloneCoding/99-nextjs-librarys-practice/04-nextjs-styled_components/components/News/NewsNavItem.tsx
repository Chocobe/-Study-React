import styled from "styled-components";
import Link from "next/link";

const NewsNavItemRoot = styled.div`
  padding: 8px 12px;
  color: #fff;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.blue01};
`

export type NewsNavItemProps = {
  name: string;
}

function NewsNavItem(props: NewsNavItemProps) {
  const { name } = props;
  
  return (
    <NewsNavItemRoot>
      <Link href={`/News/${name}`}>
        {name}
      </Link>
    </NewsNavItemRoot>
  );
}

export default NewsNavItem;