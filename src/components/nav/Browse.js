import React from 'react'
import { Banner, BrowseBtn, SectionTitle } from '../StyledComponents'

export default function Browse() {
  return (
    <div>
        <SectionTitle>BROWSE STEAM</SectionTitle>
        <Banner> 
            <BrowseBtn>NEW RELEASES</BrowseBtn>
            <BrowseBtn>SPECIALS</BrowseBtn>
            <BrowseBtn>FREE GAMES</BrowseBtn>
            <BrowseBtn>BY USER TAGS</BrowseBtn>
        </Banner>
    </div>
  )
}
