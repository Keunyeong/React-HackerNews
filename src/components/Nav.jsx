import styled from "styled-components";
import { Link } from "react-router-dom";

const NavEl = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 375px) {
    width: 375px;
    height: 40px;
    /* border: 1px solid blue; */
    padding: 0 10px;
  }

  /* border: 1px solid blue; */
`;

const NavBtn = styled.div`
  @media screen and (max-width: 375px) {
    width: ${375 / 5}px;
    height: 40px;
    /* border: 1px solid orange; */
  }
  & > * {
    line-height: 40px;
    text-decoration: none;
    color: black;
    display: block;
    /* border: 1px solid orange; */
  }
  &:hover {
    & > * {
      color: orange;
      border-bottom: 2px solid orange;
    }
  }
`;

const Nav = () => {
  return (
    <NavEl>
      <NavBtn>
        <Link to="/news">News</Link>
      </NavBtn>
      <NavBtn>
        <Link to="/show">Show</Link>
      </NavBtn>
      <NavBtn>
        <Link to="/ask">Ask</Link>
      </NavBtn>
      <NavBtn>
        <Link to="/job">Job</Link>
      </NavBtn>
    </NavEl>
  );
};

export default Nav;
