To use this application on your local machine first make sure you have node.js installed then install all dependencies with `npm install`.

Run the react test server with `npm start`.

# Steam Home Page React Clone
- [View on Github Pages](https://syntheticdesigner.github.io/steam-clone-react-app/)
- [View on Heroku(Slower)](https://steam-clone-ajs2022.herokuapp.com/) 

## Goal
- [x] Create wireframe mock up in figma.(3/17/2022)
- [x] Create a static clone of the steam store website (First half with special event banner).(3/21/2022)
- [x] Use react components.(3/21/2022)
### Stretch Goals
- [x] Add hover effects to buttons/links. (3/22/2022)
- [x] Add hover effects to nav bar. (3/22/2022)
- [x] Add hover effects to features recommended.(thank useRef). (3/23/2022)
- [x] Add dynamic content generation with a context api mock database and react hooks.(3/22/2022)
- [x] Add timer functionality to special offers.(3/23/2022)
- [x] Add game details hover features to all component.
- [ ] Add auto slide show on game detail panel.
- [ ] Add mobile support components.
- [ ] Create second half of home page.

---

This page is an exercise to create a popular website home page using react. The exercise was to deliver a MVP in 5 days.

As the React web developer my job was to create the the MVP using react components.

I started by re-creating the layout of the [Steam](https://store.steampowered.com/) home page using figma. This happened to be during a special sale event which made the special event hero banner an unexpected addition to my clone. I finished the MVP about 2 days before the deadline allowing additional time to achieve some self set stretch goals.

As a result I have a fully functional Steam desktop home page that is interactive and expandable via a context "database". I gained experience creating different page layouts and carrousels.  One of my favorite outcomes was the hover effect on the features carrousel I achieved this effect with the `useRef` hook. [^1]

[^1]: /src/components/featured/GameCluster.js [line: 16-35]

There were several instances of dynamic data structures that I found challenging and rewarding. For example creating an element that would display previous discounts, current discounts, the full price, and the calculated discounted price dynamically based on what data was provided in the data structure was a brain teaser.  [^2] In those same elements there is also a countdown that uses some javascript in a `useEffect` with a `setTimeout` I found especially fun I think my work around for preceding 0s was clever. [^3]

[^2]:  /src/components/specialOffers/SpotlightLg
[^3]: /src/components/specialOffers/SpotlightSm

Images were pulled from the steam website and will not be used for monetary gain.

###  [Design Artifact](https://www.figma.com/file/MObbyGzcFfmiKCDAlGwGIS/steam-store-hp?node-id=20%3A75)

![Steam Design Artifact](./public/images/designArtifact.png)