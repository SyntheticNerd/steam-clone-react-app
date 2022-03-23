import React from "react";
import {
  SideBarList,
  SideH,
  SideIcon,
  SideItem,
  SideLabel,
  SideLink,
} from "./SideBarStyles";
const navStruct = [
  ["GIFT CARDS", "Now Available on Steam"],
  [
    "RECOMMENDED",
    { img: "/images/store_menu_icons-0.png", link: "By Friends" },
    { img: "/images/store_menu_icons-1.png", link: "By Curator" },
    { img: "/images/store_menu_icons-2.png", link: "Tags" },
  ],
  [
    "DISCOVERY QUEUES",
    { img: "/images/store_menu_icons-3.png", link: "Recommendations" },
    { img: "/images/store_menu_icons-4.png", link: "New Releases" },
  ],
  [
    "BROWSE CATAGORIES",
    { img: "/images/store_menu_icons-5.png", link: "Top Sellers" },
    { img: "/images/store_menu_icons-6.png", link: "New Releases" },
    { img: "/images/store_menu_icons-7.png", link: "Upcoming" },
    { img: "/images/store_menu_icons-8.png", link: "Specials" },
    { img: "/images/store_menu_icons-9.png", link: "VR Titles" },
    { img: "/images/store_menu_icons-10.png", link: "Controller-Friendly" },
  ],
  [
    "BROWSE GENRE",
    "Free to Play",
    "Early Access",
    "Action",
    "Adventure",
    "Casual",
    "Indie",
    "Massively Multiplayer",
    "Racing",
    "RPG",
    "Simulation",
    "Sports",
    "Strategy",
  ],
  ["RECENTLY VIEWED", "Core Keeper", "Elden Ring"],
];
export default function SideBar() {
  return (
    <SideBarList>
      <img
        src={process.env.PUBLIC_URL + `/images/steamcards_promo_02.png`}
        alt=''
      />
      {navStruct.map((item, index) => {
        let index1 = index;
        return item.map((link, index) => {
          let index2 = index;
          if (index === 0) {
            return <SideH key={`${index1}${index2}`}>{link}</SideH>;
          } else if (link.img) {
            return (
              <SideItem key={`${index1}${index2}`}>
                <SideLabel>
                  <SideIcon
                    src={process.env.PUBLIC_URL + link.img}
                    alt={link.img}
                  />
                </SideLabel>
                <SideLink>{link.link}</SideLink>
              </SideItem>
            );
          } else {
            return (
              <SideItem key={`${index1}${index2}`}>
                <SideLink>{link}</SideLink>
              </SideItem>
            );
          }
        });
      })}
    </SideBarList>
  );
}
