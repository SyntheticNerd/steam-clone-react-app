import styled from "styled-components";
export const FeatCont = styled.div`
  margin-top: 24px;
`;
export const ClusterCont = styled.div`
  width: 940px;
  height: 353px;
  /* background-color: var(--bg-dark); */
  background: var(--bg-dark)
    url(${process.env.PUBLIC_URL + "/images/background_maincap_2.png"}) 100%
    no-repeat;
  box-shadow: var(--shadow-prim);
  display: flex;
`;
export const ImgLg = styled.img`
  z-index: 1;
  width: 616px;
`;
export const InfoSection = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const GameTitle = styled.h1`
  color: var(--font-color-prim);
  font-weight: 400;
  margin: 16px 0px 0px 16px;
`;
export const Available = styled.h2`
  color: var(--font-color-prim);
  font-weight: 300;
  margin: 16px 0px 0px 16px;
`;
export const Cluster = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  height: 150px;
  width: 330px;
  margin-top: 32px;
  margin-left: -16px;
`;
export const ImgSml = styled.img`
  width: 160px;
  height: 70px;
  object-fit: cover;
  opacity: 50%;
  box-shadow: var(--shadow-2);
  transition: all 0.2;
  &:hover {
    opacity: 1;
  }
`;
export const Tag = styled.p`
  color: var(--font-color-prim);
  font-size: 12px;
  margin-left: 16px;
  padding: 2px 8px;
  background-color: var(--bg-tag);
  width: fit-content;
  text-align: center;
  border-radius: 4px;
`;
export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PriceSml = styled.strong`
  margin: auto 0px 16px 16px;
  color: var(--font-color-blue);
  font-size: 12px;
  & > img{
    opacity: 0.7;
    float: right;
  }
`;
