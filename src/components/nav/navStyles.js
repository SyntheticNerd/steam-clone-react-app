import styled from "styled-components";

export const NavCont = styled.nav`
  position: relative;
  width: 100%;
  background-color: var(--bg-header);
  color: var(--font-color-dis);
  z-index: 3;
`;
export const NavBox = styled.div`
  display: flex;
  max-width: 940px;
  margin: auto;
  padding: 28px 0px;
  position: relative;
`;
export const Logo = styled.img`
  margin-right: 10%;
`;
export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;
export const Link = styled.li`
  margin: 12px;
  opacity: 1;
  cursor: pointer;
  & > p {
    &:hover {
      color: white;
      opacity: 1;
    }
  }
  & > ul {
    display: none;
    position: absolute;
    background: var(--bg-header);
    list-style: none;
    opacity: 1;
    padding: 8px;
    box-shadow: var(--shadow-prim);
    & li {
      margin: 4px 10px 8px 8px;
      & > span {
        font-size: 12px;
        &:hover {
          color: white;
          opacity: 1;
        }
      }
    }
  }

  &:hover {
    & > ul {
      display: inline-block;
    }
  }
`;
export const NavUtil = styled.div`
  margin-left: auto;
  margin-top: -20px;
  display: flex;
  height: 24px;
`;
export const InstallBtn = styled.button`
  display: flex;
  width: fit-content;
  border: none;
  outline: none;
  background-color: var(--bg-green);
  padding: 4px 0px 4px 8px;
  color: var(--font-color-dis);
  font-size: 12px;
  & > p {
    width: 80px;
    margin: 0px 4px;
  }
  &:hover {
    color: white;
    opacity: 1;
  }
`;
export const Anchor = styled.p`
  margin: 0px 10px;
  cursor: pointer;
  &:hover {
    color: white;
    opacity: 1;
  }
`;
export const Language = styled.p`
  margin: 0px 10px;
  cursor: pointer;
  &:hover {
    color: white;
    opacity: 1;
  }
`;
export const Line = styled.hr``;
