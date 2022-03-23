import { createContext } from "react";

const games = [
  {
    id: `eldenRing1`,
    name: "Elden Ring",
    name2: "Foundation",//This is so i can reuse this array
    available: true,
    tags: ["Top Seller"],
    price: 59.99,
    disc: 50,
    prevDisc: false,
    specOff: true,
    offEnds: new Date(2022, 2, 25, 10),
    reviews: [
      {
        user: "John Doe",
        playTime: 42,
        helpful: "16",
        sprite: "/images/profile-img.jpg",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim eu tristique fusce proin odio nullam. Nibh fermentum blandit nunc sem id sit sagittis. Vitae...",
      },
    ],
    mainImg: "/images/elden_ring_main.png",
    mainAlt: "/images/back_4_blood_main.png",
    screenShots: [
      "/images/elden_ring_1.png",
      "/images/elden_ring_2.png",
      "/images/elden_ring_3.png",
      "/images/elden_ring_4.png",
    ],
    spotLightSm: "/images/jupiter_hell_spotlight_sm.png",
    spotLightLg: "/images/foundation_spotlight.png",
    spotLightSize: true,
    arGame:"/images/minecraft_small.png",
    platform: ["win", "mac", "linux"]
  },
  {
    id: `eldenRing1`,
    name: "Elden Ring",
    name2: "Foundation",//This is so i can reuse this array
    available: true,
    tags: ["Top Seller"],
    price: 59.99,
    disc: 50,
    prevDisc: 20,
    specOff: false,
    offEnds: false,
    reviews: [
      {
        user: "John Doe",
        playTime: 42,
        helpful: "16",
        sprite: "/images/profile-img.jpg",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim eu tristique fusce proin odio nullam. Nibh fermentum blandit nunc sem id sit sagittis. Vitae...",
      },
    ],
    mainImg: "/images/steam_deck_main.png",
    mainAlt: "/images/back_4_blood_main.png",
    screenShots: [
      "/images/steam_deck_1.png",
      "/images/steam_deck_2.png",
      "/images/steam_deck_3.png",
      "/images/steam_deck_4.png",
    ],
    spotLightSm: "/images/jupiter_hell_spotlight_sm.png",
    spotLightLg: "/images/egosoft_spotlight.png",
    spotLightSize: true,
    arGame:"/images/population_one_small.png",
    platform: ["linux"]
  },
  {
    id: `eldenRing1`,
    name: "Elden Ring",
    name2: "Foundation",//This is so i can reuse this array
    available: true,
    tags: ["Top Seller"],
    price: 59.99,
    disc: 50,
    prevDisc: false,
    specOff: true,
    offEnds: new Date(2022, 2, 25, 10),
    reviews: [
      {
        user: "John Doe",
        playTime: 42,
        helpful: "16",
        sprite: "/images/profile-img.jpg",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim eu tristique fusce proin odio nullam. Nibh fermentum blandit nunc sem id sit sagittis. Vitae...",
      },
    ],
    mainImg: "/images/fallen_order_main.png",
    mainAlt: "/images/back_4_blood_main.png",
    screenShots: [
      "/images/fallen_order_1.png",
      "/images/fallen_order_2.png",
      "/images/fallen_order_3.png",
      "/images/fallen_order_4.png",
    ],
    spotLightSm: "/images/jupiter_hell_spotlight_sm.png",
    spotLightLg: "/images/foundation_spotlight.png",
    spotLightSize: false,
    arGame:"/images/dragon_age_small.png",
    platform: ["win", "mac", "linux"]
  },
  {
    id: `eldenRing1`,
    name: "Elden Ring",
    name2: "Foundation",//This is so i can reuse this array
    available: true,
    tags: ["Top Seller"],
    price: 59.99,
    disc: 50,
    prevDisc: false,
    specOff: false,
    offEnds: new Date(2022, 2, 25, 18),
    reviews: [
      {
        user: "Sally Bar",
        playTime: 42,
        helpful: "16",
        sprite: "/images/profile-img.jpg",
        review:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim eu tristique fusce proin odio nullam. Nibh fermentum blandit nunc sem id sit sagittis. Vitae...",
      },
    ],
    mainImg: "/images/elden_ring_main.png",
    mainAlt: "/images/back_4_blood_main.png",
    screenShots: [
      "/images/elden_ring_1.png",
      "/images/elden_ring_2.png",
      "/images/elden_ring_3.png",
      "/images/elden_ring_4.png",
    ],
    spotLightSm: "/images/city_gangster_spotlight_sm.png",
    spotLightLg: "/images/foundation_spotlight.png",
    spotLightSize: false,
    arGame:"/images/chrono_trigger_small.png",
    platform: ["win", "mac", "linux"]
  },
];

const SteamContext = createContext(games);
SteamContext.displayName = "Steam Games";

export { SteamContext, games };
