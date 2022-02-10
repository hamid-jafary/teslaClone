import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({ title, text, leftButton, rightButton, backgroundImg }) {
  return (
    <Wrap bgImg={backgroundImg}>
      <ItemText>
        <Fade bottom>
          <h1>{title}</h1>
          <p>{text}</p>
        </Fade>
      </ItemText>
      <Grop>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftButton}</LeftButton>
            {rightButton && <RightButton>{rightButton}</RightButton>}
          </ButtonGroup>
        </Fade>
        <ArowDown>
          <img src="./images tesla/down-arrow.svg" />
        </ArowDown>
      </Grop>
    </Wrap>
  );
}

export default Section;

const Grop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const Wrap = styled.div`
  z-index:-10;
  width: 100vw;
  height: 100vh;
  background-image: url("./images tesla/model-s.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: ${(props) => `url("./images tesla/${props.bgImg}")`};
`;
const ItemText = styled.div`
  text-align: center;
  margin-top: 100px;
  color: #393c41;
  h1 {
    padding-bottom: 10px;
  }
`;
const ButtonGroup = styled.div`
  margin-bottom: 50px;
  display: flex;
  @media (max-width: 798px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const LeftButton = styled.div`
  background-color: #181b21;
  color: #fff;
  font-size: 14px;
  opacity: 0.7;
  height: 40px;
  width: 249px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  margin-right: 20px;
  cursor: pointer;
  font-weight: 400;
  @media (max-width: 798px) {
    margin: 0;
    margin-bottom: 20px;
  }
`;
const RightButton = styled(LeftButton)`
  margin-left: 20px;
  color: black;
  background-color: #fff;
  @media (max-width: 798px) {
    margin: 0;
  }
`;
const ArowDown = styled.div`
  width: 50px;
  height: 50px;
  img {
    animation-name: arrowanimate;
    animation-duration: 4s;
    animation-iteration-count: infinite;
  }
`;
