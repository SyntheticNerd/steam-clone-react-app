import styled from "styled-components";

export const SideBarList = styled.ul`
    position: absolute;
    left: 50%;
    transform: translateX(-700px);
    list-style-type: none;
`;
export const SideItem = styled.li`
    display: flex;
    align-items: center;
`;
export const SideH = styled.h1`
    color: var(--font-color-prim);
    font-weight: 300;
    font-size: 12px;
    margin: 8px 4px;
`;
export const SideLabel = styled.label`
    height: 16px;
`;
export const SideIcon = styled.img``;
export const SideLink = styled.p`
    text-decoration: none;
    color: var(--font-color-blue2);
    font-size: 12px;
    margin: 4px;
    cursor: pointer;
    &:hover{
        color: white;
    }
`;