import Paginator from "../Paginator";
import { SectionTitle } from "../StyledComponents";
import OffersGrid from "./OffersGrid";
import { OffersCont } from "./SpecOffStyle";
import { useState } from "react";

export default function SpecialOffers() {
  const [page, setPage] = useState(0);
  return (
    <OffersCont>
      <SectionTitle>
        SPECIAL OFFERS<button>BROWSE MORE</button>
      </SectionTitle>
      <Paginator setPage={setPage} page={page} length={4}>
        <OffersGrid />
      </Paginator>
    </OffersCont>
  );
}
