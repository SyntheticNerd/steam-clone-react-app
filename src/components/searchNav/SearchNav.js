import { SearchNavCont } from "./SearchNavStyles";

export default function SearchNav() {
  return (
    <SearchNavCont>
      <ul>
        <li>
          <a href='#'>Your Store</a>
        </li>
        <li>
          <a href='#'>
            <img
              src={process.env.PUBLIC_URL + "/images/newLinks.svg"}
              alt='new'
            />
            {"News & Noteworthy"}
          </a>
        </li>
        <li>
          <a href='#'>
            <img
              src={process.env.PUBLIC_URL + "/images/newLinks.svg"}
              alt='new'
            />
            Catagories
          </a>
        </li>
        <li>
          <a href='#'>Points Shop</a>
        </li>
        <li>
          <a href='#'>News</a>
        </li>
        <li>
          <a href='#'>Labs</a>
        </li>
      </ul>
      <form>
        <input type='text' />
        <button type="submit">
          <img
            src={process.env.PUBLIC_URL + "/images/search_icon_btn.png"}
            alt='Search'
          />
        </button>
      </form>
    </SearchNavCont>
  );
}
