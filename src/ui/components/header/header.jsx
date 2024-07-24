import logo from "../../../assets/imgs/landing-pepe-logo.jpeg";
import { ROUTES } from "../../../constants/routes.constant";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <header className="w-full bg-black">
      <nav className="flex flex-row ">
        <img className="w-3/12 aspect-video md:w-1/12 max-h-14 max-w-28" src={logo}></img>
        <ul className="flex flex-col basis-full justify-center items-center self-center gap-x-10 text-white md:flex-row">
          <li>
            <a>
              <Link to={ROUTES.HOME}>Home</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to={ROUTES.GACHA}>Gacha (*/ω＼*)</Link>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
