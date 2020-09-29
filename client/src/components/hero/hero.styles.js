import styled from "styled-components";

//svg background
import ChuckBkg from "../../assets/hero.svg";

export const HeroWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
  background: url(${ChuckBkg});
  padding: 20px;
  width: 100%;
  height: 60vh;
  background-size: cover;
  background-position: center;
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  float: right;
  padding-right: 20px;
`;

export const LargeText = styled.h1`
  font-family: "Secular One", sans-serif;
  font-size: 60px;
  line-height: 1.3;
  color: #fff;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  span {
    color: #eb5757;
  }
`;

export const TextWrapper = styled.div`
  width: 80%;
  font-family: open-sans;
  background-color: #587d87;
  margin-top: 20px;
  padding: 20px;
  box-shadow: 5px 4px 11px -7px #444444;
`;

export const Text = styled.p`
  font-size: 16px;
  color: #fff;
  font-family: Lato;
`;
