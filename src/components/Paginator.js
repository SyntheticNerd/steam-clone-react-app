import ArrowBtnLg from "./ArrowBtnLg";
import { PaginatorCont, PageTracker } from "./StyledComponents";
import { useEffect, useState } from "react";

export default function Paginator({ children, setPage, page, length }) {
  const [pgIndicator, setPgIndicator] = useState([]);
  useEffect(() => {
    let tempArr = [];
    for (let i = 0; i < length; i++) {
      let opac = i === page ? { opacity: "0.8" } : { opacity: "0.3" };
      tempArr.push(<div key={i} style={opac} />);
    }
    setPgIndicator(tempArr);
  }, [page, length]);
  function inc() {
    if (page + 1 < length) {
      setPage(page + 1);
    }else setPage(0);
  }
  function dec() {
    if (page - 1 > -1) {
      setPage(page - 1);
    }else setPage(length-1);
  }

  return (
    <>
      <PaginatorCont>
        <ArrowBtnLg onClick={dec} />
        {children}
        <ArrowBtnLg direction='right' onClick={inc} />
      </PaginatorCont>
      <PageTracker>{pgIndicator}</PageTracker>
    </>
  );
}
