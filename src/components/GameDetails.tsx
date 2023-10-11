import { Link, useParams } from "react-router-dom";
import useGameDeatails from "../hooks/useGameDetails";
import TextShowMoreLess from "./TextShow";
import GamesVideo from "./GamesVideo";
import imageResize from "../services/image-resize";

function GameDetails() {
  const params = useParams();
  const { game, error, isLoading } = useGameDeatails(params.slug!);




  if (error) {
    throw new Error("Data not found");
  }

  if (isLoading)
    return (
      <div>
        <h5>Loading....</h5>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  return (
    <>
      <div className="container text-center my-0 px-2 pt-4 py-2 bg-secondary bg-opacity-25 box-col-1">
        <div className="d-flex justify-content-start">
          <Link
            className="btn btn-secondary ms-3 mb-2 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
            to="/games"
          >
            Back
          </Link>
        </div>

        <div className="row mx-0 my-2">
          <div className="col">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col">
                  <img
                    height={220}
                    src={imageResize(game?.background_image!)}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col">
                  <div className="card-body pt-4">
                    <h4 className="card-title">{game?.name}</h4>
                    <p className="card-text">Rating : {game?.rating}</p>
                    <p className="card-text">
                      Publishers : {game?.publishers[0].name}
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Released:{game?.released}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            <h1></h1> <h4></h4>
            <TextShowMoreLess>{game?.description_raw}</TextShowMoreLess>
            <div className="row">
              <div className="col px-5 py-3">
                <div className="card">
                  <div className="card-header bg-secondary bg-opacity-50">
                    Platforms
                  </div>
                  <ul className="list-group list-group-flush">
                    {game?.parent_platforms.map(({ platform }) => (
                      <li key={platform.id} className="list-group-item">
                        {platform.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col px-5 py-3">
                <div className="card">
                  <div className="card-header bg-secondary bg-opacity-50">
                    Genres
                  </div>
                  <ul className="list-group list-group-flush">
                    {game?.genres.map((genre) => (
                      <li key={genre.id} className="list-group-item">
                        {genre.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>{" "}
            </div>
            <h5>
              <a target="_blank" href={game?.website}>
                Visit official website
              </a>
            </h5>
          </div>
          <div className="col">
            <GamesVideo slug={params.slug!} />
          </div>
        </div>
      </div>
    </>
  );
}

export default GameDetails;
