import styled from "styled-components";
import { EColors } from "../../constants";
import { Link } from "react-router-dom";

export const Container = styled("div")`
  max-width: 720px;
`;

export const Title = styled("h1")`
  color: ${EColors.TEXT};
  margin-bottom: 20px;
  font-weight: 400;

  .ilumeo {
    font-weight: 600;
  }
`;

export const Input = styled("input")`
  background-color: transparent;
  outline: none !important;
  border: none !important;
  color: ${EColors.TEXT} !important;
  padding-left: 20px;
  font-size: 18px;
  line-height: 1.5em;

  &:active,
  &:focus {
    background-color: ${EColors.INPUT_BACKGROUND};
    box-shadow: inset 0 0 0 #ddd;
  }
`;

export const PageLink = styled(Link)`
  text-decoration: underline;
  color: ${EColors.LABEL};
  text-align: center;
  padding: 10px;
  transition: all .3s;

  &:hover {
    color: ${EColors.TEXT};
  }

  &:focus,
  &:active {
    color: ${EColors.LABEL};
  }
`;
