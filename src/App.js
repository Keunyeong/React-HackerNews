import styled from "styled-components";
import GlobalStyle from "./Global";
import PhoneTop from "./components/PhoneTop";
import "./styles.css";
import Application from "./components/Application";

const Phone = styled.div`
  display: flex;
  flex-direction: column;
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
