import styled from "styled-components";
import HomeRanking from "../components/HomeRanking";
import MainList from "../components/MainList";

const Main = styled.div``;

const Home = () => {
  return (
    <Main>
      <HomeRanking></HomeRanking>
      <MainList></MainList>
    </Main>
  );
};

export default Home;
