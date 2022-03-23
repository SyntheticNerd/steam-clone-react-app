import styled from "styled-components";

export const StyleVariables = styled.div`
  --bg-main: rgb(27, 40, 56);
  --bg-header: rgb(23, 26, 33);
  --bg-dark: rgb(9, 19, 28);
  --bg-green: rgb(76, 107, 34);
  --bg-capcom: rgb(11, 71, 149);
  --bg-time-left: rgb(79, 149, 189);
  --bg-search: rgb(49, 98, 130);
  --bg-tag: rgb(56, 64, 71);
  --bg-price-medium: rgb(52, 69, 84);
  --bg-price-light: rgb(187, 225, 246);
  --bg-price-dark: rgb(14, 50, 66);
  --bg-price-opaque: rgba(0, 0, 0, 0.6);
  --tool-grad: linear-gradient(
    90deg,
    rgba(73, 116, 156, 0.9) 0%,
    rgba(48, 91, 154, 0.9) 53.02%,
    rgba(15, 33, 110, 0.9) 100%
  );
  --bg-grad-2: linear-gradient(
    180deg,
    rgb(70, 95, 119) 0%,
    rgb(27, 40, 56) 85%
  );
  --bg-grad-3: linear-gradient(
    90deg,
    rgb(49, 80, 109) 0%,
    rgb(64, 120, 152) 100%
  );
  --bg-grad-btn: linear-gradient(
    90deg,
    rgb(0, 255, 255) 0%,
    rgb(45, 115, 255) 100%
  );
  --bg-btn-grad: linear-gradient(90deg, #131d28 0%, rgba(19, 27, 40, 0) 100%);
  --bg-btn-grad-hover: linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 90%);
  --font-color-blue: rgb(116, 187, 248);
  --font-color-blue2: #acdbf5;
  --font-color-green: #a4d007;
  --font-color-prim: rgba(255, 255, 255, 0.88);
  --font-color-dis: rgba(255, 255, 255, 0.6);
  --font-color-sec: rgba(0, 0, 0, 0.6);
  --shadow-prim: 0px 4px 8px rgba(0, 0, 0, 0.5);
  --shadow-2: 0px 2px 4px rgba(0, 0, 0, 0.6);
`;

export const HomePage = styled.div`
  font-family: "Roboto", sans-serif;
  background-color: var(--bg-main);
  height: fit-content;
  min-height: fit-content;
  padding-bottom: 64px;
`;
export const HeroCont = styled.div`
  background-color: var(--bg-capcom);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  position: relative;
`;
export const ArrowBtnCont = styled.button`
  height: 100px;
  width: 50px;
  background: var(--bg-btn-grad);
  border: none;
  &:hover{
    background: var(--bg-btn-grad-hover);
  }
`;

export const PaginatorCont = styled.div`
  display: flex;
  width: fit-content;
  margin: auto;
  align-items: center;
`;

export const PageTracker = styled.div`
  display: flex;
  width: fit-content;
  margin: auto;
  margin-bottom: 32px;
  & > div {
    width: fit-content;
    margin: 16px 4px;
    padding: 4px 8px;
    background-color: rgb(255, 255, 255);
    border-radius: 2px;
  }
`;

export const SectionTitle = styled.h1`
  width: 90%;
  max-width: 940px;
  margin: auto;
  font-size: 15px;
  color: var(--font-color-prim);
  font-weight: 400;
  margin-bottom: 16px;
  & > button {
    float: right;
    background: none;
    padding: 4px 16px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 2px;
    color: var(--font-color-prim);
    font-size: 12px;
    &:hover{
      border: 1px solid rgba(255, 255, 255, 0.88);
    }
  }
`;
export const SectionTitleLg = styled.h1`
  width: 90%;
  max-width: 940px;
  margin: auto;
  font-size: 30px;
  color: var(--font-color-prim);
  font-weight: 400;
`;

export const Banner = styled.div`
  margin: 0px auto 40px auto;
  width: 940px;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  & > img {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    &:hover{
      box-shadow: 0px 0px 12px var(--font-color-blue);
    }
  }
`;

export const BrowseBtn = styled.button`
  width: 24%;
  height: 58px;
  background: var(--bg-grad-btn);
  border: none;
  border-radius: 5px;
  text-align: center;
  color: var(--font-color-prim);
  font-size: 16px;
  font-weight: 600;
  opacity: 90%;
  &:hover{
    opacity: 1;
  }
`;
