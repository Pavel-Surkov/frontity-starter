import { styled } from "frontity";
import colors from "./colors";
import common from "./common";
import whiteArrow from "../assets/icons/arrow-white.svg";
import blackArrow from "../assets/icons/arrow-black.svg";

const Button = styled.a`
  font-family: ${common.titleFont};
  display: inline-block;
  font-size: 1.8rem;
  line-height: calc(25 / 18);
  padding: 1.11em 3.18em;
  padding-bottom: 1em;
  padding-right: calc(3.18em + 33px);
  text-transform: uppercase;
  font-weight: 700;
  background: #ffffff12;
  color: ${colors.white};
  position: relative;
  &::after {
    content: "";
    position: absolute;
    right: 3.18em;
    top: 50%;
    transform: translateY(-50%);
    width: 25px;
    height: 9px;
    background: url(${whiteArrow}) no-repeat 50% / cover;
  }
  &:hover {
    background: ${colors.lightGreen};
    color: ${colors.black};
    &::after {
      background: url(${blackArrow}) no-repeat 50% / cover;
    }
  }
  &:active {
    opacity: 0.8;
  }
`;

const button = {
  Button,
};

export default button;
