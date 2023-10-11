import useGenres from "../hooks/useGenres";
import imageResize from "../services/image-resize";
import useGenreState from "../zustandStates/genreState";

function GenreGrid() {
  const { genres, error } = useGenres();
  const { genreId, onClickingOnGenre } = useGenreState();

  return (
    <div className="py-3 px-3 box-genres d-flex  flex-column">
      {error && <h1>{error.message}</h1>}
      <h4 className="my-2">Genres</h4>
      {genres?.results.map((genre) => (
        <button
          type="button"
          onClick={() => {
            if (genre.id === genreId) {
              onClickingOnGenre(null);
            } else {
              onClickingOnGenre(genre.id);
            }
          }}
          className={
            genre.id === genreId
              ? "btn btn-secondary my-1 active "
              : "btn bg-secondary bg-opacity-50 my-1 "
          }
          key={genre.id}
        >
          <div className="d-flex flex-row container-fluid  bg-opacity-50 ">
            <div className="px-0 py-0 ">
              <img
                height={50}
                width={90}
                src={imageResize(genre.image_background)}
                className="object-fit-cover  rounded "
              ></img>
            </div>
            <div className="pt-3 d-flex justify-content-center container-fluid">
              <div>
                <h6 className="text-dark text-bold">{genre.name}</h6>
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

export default GenreGrid;
