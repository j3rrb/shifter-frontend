import styled from "styled-components";
import { EColors } from "../../constants";

export const Container = styled("div")`
  background-color: ${EColors.BACKGROUND};
  height: 100%;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

export const Content = styled("div")`
  max-width: 1280px;
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

export const InputLabel = styled("label")`
  color: ${EColors.LABEL};
  font-weight: 300;
`;

export const InputContainer = styled("div")`
  background-color: ${EColors.INPUT_BACKGROUND};
  border-radius: 5px;

  label {
    padding: 10px 0 0 20px;
  }
`;

export const Button = styled("div")`
  background-color: ${EColors.BUTTON};
  border: 0.5px solid transparent;
  color: ${EColors.BACKGROUND};
  font-size: 18px;
  font-weight: 500;
  display: block;
  padding: 10px;
  transition: all 0.3s;

  &:hover {
    color: white;
    border: 0.5px solid ${EColors.LABEL};
  }
`;
