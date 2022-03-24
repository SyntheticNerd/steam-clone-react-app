import styled from "styled-components";

export const PanelBox = styled.div`
  display: ${({hover})=>hover};
  background-color: #cce5f3;
  position: absolute;
  left: calc(100% + 8px);
  padding: 16px;
  z-index: 3;
  & > section {
    margin: 4px 0px 8px 0px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.3);
    padding: 2px 4px;
    border-radius: 2px;
    & > p {
      color: var(--font-color-prim);
      & > span {
        color: var(--font-color-blue2);
      }
    }
  }
  & > h1 {
    font-size: 16px;
    font-weight: 400;
  }
  & > b {
    font-weight: 300;
    font-size: 14px;
  }
`;
export const Released = styled.div`
  font-size: 12px;
`;

export const TagList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
export const Tag = styled.li`
  margin: 0px 4px 4px 0px;
  background: rgba(0, 0, 0, 0.2);
  color: white;
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 12px;
`;
export const ArrowBit = styled.div`
  position: absolute;
  top: 25%;
  transform: translateX(-130%) rotate(-45deg);
  background-color: #cce5f3;
  height: 20px;
  width: 20px;
  z-index: -1;
`;
