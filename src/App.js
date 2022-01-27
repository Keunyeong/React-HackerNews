import styled from "styled-components";
import PhoneTop from "./components/PhoneTop";
import "./styles.css";

const Phone = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;

export default function App() {
  return (
    <Phone className="App">
      <PhoneTop />
    </Phone>
  );
}
