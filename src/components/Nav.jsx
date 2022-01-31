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
    padding: 0 20px;
  }

  /* border: 1px solid blue; */
`;

const NavBtn = styled.div`
  @media screen and (max-width: 375px) {
    width: ${375 / 4}px;
    height: 40px;

    /* border: 1px solid orange; */
  }
  & > * {
    padding-top: 3px;
    font-size: 1.1rem;
    line-height: 37px;
    text-decoration: none;
    color: #999;
    font-weight: 400;
    display: block;
    border-bottom: 1px solid #ff6600;
  }
  &:hover {
    & > * {
      color: #ff6600;
    }
  }
`;

const Nav = () => {
  return (
    <NavEl>
      <NavBtn>
        <Link to="/Article">Article</Link>
      </NavBtn>
      <NavBtn>
        <Link to="/show">Show</Link>
      </NavBtn>
      <NavBtn>
        <Link to="/ask">Ask</Link>
      </NavBtn>
      <NavBtn>
        <Link to="/jobs">Jobs</Link>
      </NavBtn>
    </NavEl>
  );
};

export default Nav;
