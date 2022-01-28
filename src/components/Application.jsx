import styled from "styled-components";
import Head from "./Head";
import Nav from "./Nav";

const App = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 375px) {
    width: 375px;
    height: ${812 - 44}px;
    border: 1px solid red;
  }
`;

const Application = () => {
  return (
    <App>
      <Head />
      <Nav />
    </App>
  );
};

export default Application;
