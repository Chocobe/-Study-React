import {
  ReactNode,
} from "react";
import styled from "styled-components";

const NewsHeaderRoot = styled.header`
  padding: 12px 20px;
  width: 100%;
  color: #fff;
  font-size: 24px;
  font-weight: 900;
  text-align: end;
  background-color: ${({ theme }) => theme.colors.gray03};
`;

export type NewsHeaderProps = {
  children: ReactNode,
};

function NewsHeader(props: NewsHeaderProps) {
  return (
    <NewsHeaderRoot>
      {props.children}
    </NewsHeaderRoot>
  );
}

export default NewsHeader;