import styled from "styled-components";
import Card from "./Card";

const Main = styled.div`
  @media screen and (max-width: 375px) {
    width: 375px;
    /* border: 1px solid red; */
  }
  & > .list {
    overflow: scroll;
    /* border: 1px solid red; */
    @media screen and (max-width: 375px) {
      height: ${812 - 44 - 60 - 40 - 54}px;
    }
  }
`;
const Option = styled.div`
  @media screen and (max-width: 375px) {
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid blue; */
    margin: 0 20px;
  }
`;

const CheckBox = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 375px) {
    width: 102px;
    height: 20px;
  }
`;

const ListSelect = styled.img`
  width: 47px;
`;
const ViewSelect = styled.img``;

const MainList = ({ list }) => {
  return (
    <Main>
      <Option>
        <CheckBox>
          <ListSelect src="images/NewCheckOn.png" alt="TOPCHECKOFF" />
          <ListSelect src="images/TopCheckOff.png" alt="NEWCHECKON" />
        </CheckBox>
        <ViewSelect src="images/ViewShort.png" alt="VIEWSHORT" />
      </Option>
      <div className="list">
        <ul>
          {list.map((id, index) => {
            return <Card id={id} key={id} index={index}></Card>;
          })}
        </ul>
      </div>
    </Main>
  );
};

export default MainList;
