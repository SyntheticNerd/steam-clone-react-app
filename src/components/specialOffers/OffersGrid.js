import { GridBox } from "./SpecOffStyle";
import SpotLightLg from "./SpotLightLg";
import SpotlightSm from "./SpotlightSm";
import { SteamContext } from "../../utils/context";
import { useContext } from "react";

export default function OffersGrid() {
  const { games } = useContext(SteamContext);
  return (
    <GridBox>
      <SteamContext.Consumer games={{ games }}>
        {(games) => {
          return games.map((game, index) => {
            if (game.spotLightSize === true) {
              return <SpotLightLg key={index} game={game} />;
            } else {
              return <SpotlightSm key={index} game={game} />;
            }
          });
        }}
      </SteamContext.Consumer>
      {/* <SpotLightLg live={true} image={"/images/foundation_spotlight.png"} />
      <SpotLightLg live={true} image={"/images/egosoft_spotlight.png"} />
      <SpotlightSm
        live={true}
        image={"/images/jupiter_hell_spotlight_sm.png"}
      />
      <SpotlightSm
        live={true}
        image={"/images/city_gangster_spotlight_sm.png"}
      /> */}
    </GridBox>
  );
}
