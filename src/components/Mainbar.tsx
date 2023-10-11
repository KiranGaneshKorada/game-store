import GamesGrid from "./GamesGrid";
import PlatformDropDown from "./PlatformDropDown";
import OrderByDropdown from "./OrderByDropdown";




function Mainbar() {

  


  return (
    <>
      <div
        className="bg-secondary col bg-opacity-25
      my-0 mx-0 py-0 px-0 pt-4 box-games "
      >
        <div className="d-flex flex-row">
          <div className="my-3 mx-2 ms-3">
            <PlatformDropDown />
          </div>
          <div className="my-3 mx-2">
            <OrderByDropdown />
          </div>
        </div>

        <GamesGrid />
      </div>
    </>
  );
}

export default Mainbar;
