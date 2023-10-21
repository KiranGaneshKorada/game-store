import { Link } from "react-router-dom";
import SearchComponent from "./SearchComponent";



function Navbar() {
  return (
    <>
      <nav className="navbar sticky-Nav navbar-expand-lg bg-secondary bg-opacity-50 my-0 mx-0 py-0 px-0">
        <div className="d-flex justify-content-center container-fluid pe-0">
          <Link className=" navbar-brand me-0" to="/games">
            Game-Store
          </Link>
          <div className="col  text-white my-0 mx-0 py-0 px-0 my-1 ">
            <SearchComponent />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
