import {
  useRef,
  useEffect,
} from "react";
import styled from "styled-components";
import NewsNavItem from "./NewsNavItem";

const NewsNavRoot = styled.nav`
  display: inline-flex;
`

const newsCategorys = [
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

export type NewsNavProps = {
  onMounted: Function,
};

function NewsNav(props: NewsNavProps) {
  const { onMounted } = props;
  
  const navRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const { width } = navRef.current!.getBoundingClientRect();
    
    console.log("width: ", width);
    
    onMounted(width);
  }, [onMounted]);
  
  return (
    <NewsNavRoot ref={navRef}>
      {newsCategorys.map(category => {
        return (
          <NewsNavItem name={category} key={category} />
        )
      })}
      {/* <NewsNavItem name="Business" />
      <NewsNavItem name="Health" />
      <NewsNavItem name="Game1" />
      <NewsNavItem name="Game2" />
      <NewsNavItem name="Game3" />
      <NewsNavItem name="Game4" /> */}
    </NewsNavRoot>
  );
}

export default NewsNav;