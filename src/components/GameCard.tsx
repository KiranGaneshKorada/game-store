import { Link } from "react-router-dom";
import { Game } from "../hooks/useGames";
import imageResize from "../services/image-resize";
import IconPlatform from "./IconPlatform";


interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Link className='card'to={`${game.slug}`}>
      <div className="">
        <img
          src={imageResize(game.background_image)}
          className="card-img-top  "
          alt={game.name}
        />
        <div className="card-body bg-secondary bg-opacity-50">
          <h6 className="card-title ">{game.name}</h6>
          <IconPlatform platforms={game.parent_platforms} />
        </div>
      </div>
    </Link>
  );
}

export default GameCard;
