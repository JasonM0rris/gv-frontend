import styled, { keyframes } from "styled-components";
import { H1 } from "../../styles/TextStyles";
import { themes } from "../../styles/ColorStyles";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { tada } from "react-animations";

const tadaAnimation = keyframes`${tada}`;

export const Container = styled.div`
  display: flex;

  justify-content: center;
  margin-top: 60px;
  margin-bottom: 60px;

  @media screen and (max-width: 480px) {
    margin-top: 40px;
  }
`;

export const DealWrap = styled.div`
  /* height: 100px; */
  display: grid;

  flex-direction: column;
  justify-items: center;
  text-align: center;
  @media screen and (max-width: 450px) {
  }
`;

export const ContentH1 = styled(H1)`
  color: ${themes.light.text1};
  margin-top: 20px;
  font-size: 40px;
  font-weight: bold;
  justify-self: center;
  @media (max-width: 450px) {
    font-size: 32px;
  }
`;

export const ContentButton = styled.button`
  background: #010101;
  padding: 12px 30px;
  border: none;
  border-radius: 24px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

export const Text = styled.p`
  font-size: 13px;
  margin-top: 20px;
`;

export const Information = styled.p`
  font-size: 13px;
  text-align: left;
`;

export const Question = styled.p`
  font-size: 16px;
  text-align: left;
  font-weight: 600;
`;

export const Reducedpoints = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

export const ImageWrapper = styled.img`
  height: 180px;
  animation: 0.7s ${tadaAnimation};

  @media (max-width: 450px) {
    height: 120px;
  }
`;

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 200px;
  grid-gap: 20px;
  justify-content: center;
  margin-top: 60px;
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    min-width: 360px;
    padding: 0 18px;
    line-height: 1.5em;
  }
`;

export const InfoContainer = styled.div`
  margin: 24px 32px;
  display: flex;
  /* flex-wrap: nowrap; */
  align-items: center;
  grid-gap: 8px;
  background: beige;
  padding: 24px 16px;
  max-width: 550px;
`;

export const InfoIcon = styled(AiOutlineInfoCircle)`
  font-size: 20px;
`;
