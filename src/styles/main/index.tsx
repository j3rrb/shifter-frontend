import { EColors } from "@/constants";
import styled from "styled-components";

export const Title = styled.h3`
  color: ${EColors.TEXT};
  font-weight: 700;
`;

export const Text = styled.span`
  color: ${EColors.TEXT};
`;

export const Subtitle = styled.span`
  font-weight: 300;
  color: ${EColors.TEXT};
`;

export const ListItemContainer = styled.div`
  margin-bottom: 10px;
  background-color: ${EColors.INPUT_BACKGROUND};
  padding: 15px;
  border-radius: 5px;

  .date {
    font-weight: 300;
  }

  .time {
    font-weight: 600;
  }
`;

export const LogListContainer = styled.div`
  height: 500px;
  overflow: auto;
`;
