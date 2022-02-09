import { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import Modal from "./Modal";

const MainList = ({ list, page, setPage }) => {
  const [sort, setSort] = useState(false);
  const [view, setView] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState("");
  function addCount() {
    setPage(page + 10);
  }
  function open(id) {
    setOpenModal(true);
    setUser(id);
  }
  function close() {
    setOpenModal(false);
  }

  function viewMode() {
    setView(!view);
  }

  function sortConvert() {
    setSort(!sort);
  }
  return (
    <>
      <Main>
        <Option>
          <CheckBox>
            {sort ? (
              <ListSelect src="images/NewCheckOn.png" alt="NEWCHECKON" />
            ) : (
              <ListSelect
                onClick={sortConvert}
                src="images/NewCheckOff.png"
                alt="NEWCHECKOFF"
              />
            )}
            {sort ? (
              <ListSelect
                onClick={sortConvert}
                src="images/TopCheckOff.png"
                alt="TOPCHECKOFF"
              />
            ) : (
              <ListSelect src="images/TopCheckOn.png" alt="TOPCHECKON" />
            )}
          </CheckBox>
          {view ? (
            <ViewSelect
              onClick={viewMode}
              src="images/ViewPlus.png"
              alt="VIEWPLUS"
            />
          ) : (
            <ViewSelect
              onClick={viewMode}
              src="images/ViewMinus.png"
              alt="VIEWMINUS"
            />
          )}
        </Option>
        <div className="list">
          <ul>
            {view
              ? list.map((id, index) => {
                  return (
                    <Card id={id} key={id} index={index} open={open}></Card>
                  );
                })
              : null}
          </ul>
        </div>
        <div className="more" onClick={addCount}>
          more
        </div>
      </Main>
      <Modal openModal={openModal} close={close} id={user} />
    </>
  );
};

const Main = styled.div`
  @media screen and (max-width: 375px) {
    width: 375px;
    /* border: 1px solid red; */
  }
  & > .list {
    overflow: scroll;
    /* border: 1px solid red; */
    @media screen and (max-width: 375px) {
      height: ${812 - 44 - 60 - 40 - 54 - 60}px;
    }
  }
  & > .more {
    border: 1px solid #ff6600;
    border-radius: 10px;
    height: 30px;
    margin: 10px 20px 20px 20px;
    text-align: center;
    line-height: 30px;
    color: #ff6600;
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

export default MainList;
