import styled from "styled-components";

export const SearchNavCont = styled.nav`
  position: absolute;
  display: flex;
  align-items: center;
  background-image: var(--tool-grad);
  width: 940px;
  height: 32px;
  top: 32px;
  border-radius: 1px;
  & > ul {
    list-style: none;
    display: flex;
    align-items: center;
    height: 100%;
    & > li {
      height: 100%;
      display: flex;
      align-items: center;
      padding: 12px 12px;
      border-radius: 1px;
      &:hover {
        background-image: linear-gradient(
          90deg,
          rgba(6, 190, 255, 0.5),
          rgba(255, 255, 255, 0)
        );
      }
      & > a {
        color: var(--font-color-prim);
        display: flex;
        align-items: center;
        text-decoration: none;
        font-weight: 600;
        font-size: 14px;
        & > img {
          margin-right: 4px;
          height: 16px;
        }
      }
    }
  }
  & > form {
    margin-left: auto;
    margin-right: 4px;
    display: flex;
    align-items: center;
    background-color: var(--bg-search);
    border-radius: 2px;
    box-shadow: 2px 2px rgba(255, 255, 255, 0.1);
    height: 25px;
    &:hover {
      outline: 1px solid var(--font-color-blue);
    }
    &:focus-within {
      outline: 1px solid var(--font-color-blue);
    }
    & > input {
      margin-left: 4px;
      background: none;
      border: none;
      border-radius: 2px;
      outline: none;
      color: var(--font-color-prim);
    }
    & > button {
      border: none;
      background: none;
      height: 25px;
      &:hover {
        background-color: var(--bg-time-left);
      }
    }
  }
`;
