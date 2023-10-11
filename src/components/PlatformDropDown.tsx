import usePlatforms from "../hooks/usePlatforms";
import usePlatformState from "../zustandStates/platformState";





function PlatformDropDown() {


  const { platformName,onClickingOnPlatform } = usePlatformState();

  const { platforms, error } = usePlatforms();
  return (
    <>
      {error && <h1>{error.message}</h1>}
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Filter by Platform : {platformName}
        </button>

        <ul className="dropdown-menu dropdown-menu-platform">
          <li key="none">
            <button
              type="button"
              onClick={() => {
                onClickingOnPlatform(null,'All');
              }}
              className="dropdown-item"
            >
              All
            </button>
          </li>
          {platforms?.results.map((platform) => (
            <li key={platform.id}>
              <button
                type="button"
                onClick={() => {
                  onClickingOnPlatform(platform.id,platform.name);
                }}
                className="dropdown-item"
              >
                {platform.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default PlatformDropDown;


