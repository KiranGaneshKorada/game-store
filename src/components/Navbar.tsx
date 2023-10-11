import { Link } from "react-router-dom";
import SearchComponent from "./SearchComponent";



function Navbar() {
  return (
    <>
      <div className="navbar sticky-Nav bg-secondary bg-opacity-50 my-0 mx-0 py-0 px-0">
        <Link className="navbar-brand mx-5" to="/games">
          Game-Store
        </Link>
        <div className="col  text-white my-0 mx-0 py-0 px-0 my-1 ">
          <SearchComponent />
        </div>
      </div>
    </>
  );
}

export default Navbar;
