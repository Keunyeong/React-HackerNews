import styled from "styled-components";
import GlobalStyle from "./Global";
import PhoneTop from "./components/PhoneTop";
import "./styles.css";
import Application from "./components/Application";

const Phone = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  @media screen and (max-width: 375px) {
    width: 375px;
    height: 812px;
  }
  /* overflow: scroll; */
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Phone className="App">
        <PhoneTop />
        <Application />
      </Phone>
    </>
  );
}
