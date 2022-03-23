import React from "react";
import {
  Disc,
  InfoLg,
  LiveIcon,
  PrevDisc,
  Price,
  SpotLightLgCont,
} from "./SpecOffStyle";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function padMin(int) {
  if (int <= 9) {
    return ("0" + int).slice(-2);
  } else return int;
}

export default function SpotLightLg({ game }) {
  return (
    <SpotLightLgCont>
      {game.specOff && (
        <LiveIcon
          src={process.env.PUBLIC_URL + "/images/live_icon.svg"}
          alt='LIVE'
        />
      )}
      <img
        src={process.env.PUBLIC_URL + game.spotLightLg}
        alt={game.spotLightLg}
      />
      <InfoLg>
        <h1>MIDWEEK MADNESS</h1>
        {game.offEnds && (
          <p>
            Offer ends {months[game.offEnds.getMonth()]}{" "}
            {game.offEnds.getDate()} @ {game.offEnds.getHours() % 12}:
            {padMin(game.offEnds.getMinutes())}
            {game.offEnds.getHours() >= 12 ? "pm" : "am"}
          </p>
        )}

        <div>
          {game.prevDisc && (
            <PrevDisc>
              <p>-{game.prevDisc}%</p>
            </PrevDisc>
          )}
          {game.disc && (
            <Disc>
              <p>-{game.disc}%</p>
            </Disc>
          )}
          <Price>
            <p>${game.price}</p>
            <strong>${(game.price * (game.disc/100)).toFixed(2) -.01}</strong>
          </Price>
        </div>
      </InfoLg>
    </SpotLightLgCont>
  );
}
