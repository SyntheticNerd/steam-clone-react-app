import Paginator from "../Paginator";
import { SectionTitle } from "../StyledComponents";
import GameCluster from "./GameCluster";
import { FeatCont } from "./FeatStyles";
import { useContext, useState, useEffect } from "react";
import { SteamContext } from "../../utils/context";

export default function Featured() {
  const { games } = useContext(SteamContext);
  const [page, setPage] = useState(0);
  return (
    <FeatCont>
      <SectionTitle>FEATURED AND RECOMMENDED</SectionTitle>
      <SteamContext.Consumer games={{ games }}>
        {(games) => {
          return (
            <Paginator setPage={setPage} page={page} length={games.length}>
              <GameCluster game={games[page]}/>
            </Paginator>
          );
        }}
      </SteamContext.Consumer>
    </FeatCont>
  );
}
