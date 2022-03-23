import styled from "styled-components";

export const RecCont = styled.div``;
export const ImgLg = styled.img``;
export const RecBox = styled.div`
  width: 940px;
  height: 350px;
  /* background-color: var(--bg-dark); */
  background: var(--bg-grad-2) center/100%;
  box-shadow: var(--shadow-prim);
  display: flex;
`;
export const RevBox = styled.div`
  /* border: 2px solid red; */
  flex-grow: 1;
  padding: 24px;
  & > b {
    font-size: 20px;
    font-weight: 600;
    color: var(--font-color-prim);
  }
  & > p {
    text-align: center;
    margin: 24px;
    color: var(--font-color-blue2);
  }
`;

export const ImgCont = styled.div`
  position: relative;
  height: fit-content;
  display: flex;
  justify-content: right;
  align-items: flex-end;
  & > div {
    position: absolute;
    display: flex;
    margin-bottom: 32px;
  }
`;

export const Disc = styled.div`
  padding: 4px 8px;
  display: flex;
  align-items: center;
  background-color: var(--bg-green);
  font-weight: 600;
  font-size: 24px;
  color: var(--font-color-green);
  width: fit-content;
`;
export const Price = styled.div`
  text-align: right;
  font-size: 10px;
  padding: 4px 16px;
  background-color: rgba(0, 0, 0, 0.7);
  color: var(--font-color-blue2);
  & > p {
    position: relative;
    &::before {
      content: "";
      width: 80%;
      position: absolute;
      border-bottom: 1px solid var(--font-color-blue2);
      top: 50%;
    }
  }
  & > strong {
    font-size: 12px;
    font-weight: 700;
  }
`;
export const UserInfoSB = styled.div`
  display: flex;
  height: fit-content;
  & > img {
    image-resolution: from-image;
    width: 40px;
    height: 40px;
  }
  & > div {
      margin-left: 8px;
    & > h2 {
      color: var(--font-color-blue2);
      font-weight: 600;
      font-size: 12px;
    }
    & > p {
      color: var(--font-color-blue2);
      font-weight: 400;
      font-size: 10px;
    }
  }
`;
