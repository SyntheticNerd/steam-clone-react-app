import styled from "styled-components";

export const GameList = styled.div`
    display: flex;
    justify-content: space-between;
    width: 940px;
`;
export const GameBtn = styled.button`
    background: var(--bg-grad-3);
    height: fit-content;
    border: none;
    width: 228px;
    height: 132px;
    display: flex;
    position: relative;
    & > img{
        position: absolute;
    }
    &:hover{
        background: rgb(64, 120, 152) 100%;
    }
`;

export const PriceTagSm = styled.b`
    align-self: flex-end;
    justify-self: flex-end;
    color: var(--font-color-blue2);
    font-size: 12px;
    font-weight: 500;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 2px 4px;
    margin: 4px;
    margin-left: auto;
`;
