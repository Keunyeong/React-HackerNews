import styled from "styled-components";

const NavEl = styled.nav`
  @media screen and (max-width: 375px) {
    width: 375px;
    heigth: 60px;
    border: 1px solid blue;
  }
  display: none;
`;

const Nav = () => {
  return <NavEl>ㄹㅎㅇㄹㄴㅇㄹ</NavEl>;
};

export default Nav;
