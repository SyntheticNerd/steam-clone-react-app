import React, { useState, useContext } from "react";
import Paginator from "../Paginator";
import { SectionTitle, SectionTitleLg } from "../StyledComponents";
import Recommendation from "./Recommendation";
import { RecCont } from "./RecStyles";
import { SteamContext } from "../../utils/context";

export default function Recomended() {
  const { games } = useContext(SteamContext);
  const [page, setPage] = useState(0);
  return (
    <RecCont>
      <SectionTitleLg>THE COMMUNITY RECOMMENDS</SectionTitleLg>
      <SectionTitle>
        THESE GAMES TODAY<button>{`CUSTOMIZE, EXPLORE BY TAG, & MORE`}</button>
      </SectionTitle>

      <SteamContext.Consumer games={{ games }}>
        {(games) => {
          return (
            <Paginator setPage={setPage} page={page} length={games.length}>
              <Recommendation game={games[page]}/>
            </Paginator>
          );
        }}
      </SteamContext.Consumer>
    </RecCont>
  );
}
