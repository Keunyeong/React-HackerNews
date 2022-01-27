import styled from "styled-components";

const PhoneStatus = styled.div`
  width: 375px;
  height: 44px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 376px) {
    display: none;
  }
  align-items: center;
  border: 1px solid red;
`;

const Watch = styled.div`
  margin-left: 20px;
`;
const Status = styled.div`
  display: flex;
  justify-content: space-between;
  width: 65px;
  margin-right: 25px;
`;

const PhoneTop = () => {
  return (
    <PhoneStatus>
      <Watch>
        <img src="images/Time.png" alt="WATCH" />
      </Watch>
      <Status>
        <div>
          <img src="images/Cellular.png" alt="CELLULAR" />
        </div>
        <div>
          <img src="images/Wifi.png" alt="WIFI" />
        </div>
        <div>
          <img src="images/Battery.png" alt="BATTERY" />
        </div>
      </Status>
    </PhoneStatus>
  );
};

export default PhoneTop;
