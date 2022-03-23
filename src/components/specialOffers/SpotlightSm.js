import React, { useState, useEffect } from "react";
import {
  Disc,
  InfoSm,
  LiveIcon,
  PrevDisc,
  PrevPrice,
  Price,
  SpotLightSmCont,
  TimeLeft,
} from "./SpecOffStyle";

function padMin(int) {
  if (int <= 9) {
    return ("0" + int).slice(-2);
  } else return int;
}

function countDown(countDownDate) {
  let now = new Date().getTime();
  let distance = countDownDate.getTime() - now;
  let timeleft = {};
  if (distance > 0) {
    timeleft = {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    };
  }
  return timeleft;
}

export default function SpotlightSm({ game }) {
  const [timeLeft, setTimeLeft] = useState(countDown(game.offEnds));
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(countDown(game.offEnds));
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <SpotLightSmCont>
      {game.specOff && (
        <LiveIcon
          src={process.env.PUBLIC_URL + "/images/live_icon.svg"}
          alt='LIVE'
        />
      )}
      <img
        src={process.env.PUBLIC_URL + game.spotLightSm}
        alt={game.spotLightSm}
      />
      <InfoSm>
        <div>
          <h1>Todays Deal!</h1>
          <TimeLeft>
            {timeLeft.days > 0 && `${timeLeft.days} days `}
            {timeLeft.hours}:{timeLeft.minutes}:{padMin(timeLeft.seconds)}
          </TimeLeft>
        </div>
        <section>
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
        </section>
      </InfoSm>
    </SpotLightSmCont>
  );
}
