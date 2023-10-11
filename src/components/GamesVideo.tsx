import useGamesVideo from "../hooks/useGamesVideo"
import imageResize from "../services/image-resize";
import GameTrailer from "./GameTrailer";

interface Props{
    slug:string
}


function GamesVideo({slug}:Props){
    const { screenShots, error, isLoading } = useGamesVideo(slug,3);


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
      <div className="container-fluid"><GameTrailer slug={slug}/></div>
        <div className="container-fluid mx-0 my-0 px-0 py-0 mt-2">
          {screenShots?.results.map((image) => (
            <img
              height={300}
              width={300}
              key={image.id}
              src={imageResize(image.image)}
              className="img-fluid px-1 py-1"
              alt="..."
            />
          ))}
        </div>
      </>
    );
}

export default GamesVideo