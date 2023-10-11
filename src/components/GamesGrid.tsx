import { Button } from "react-bootstrap";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { useState } from "react";



function GamesGrid() {

  const [pageNo,setPageNo]=useState(1)
  const { games, error, isLoading} = useGames(pageNo,12 );


       if (isLoading) return (
         <>
           <h5>Loading....</h5>
           <div className="spinner-border" role="status">
             <span className="visually-hidden">Loading...</span>
           </div>
         </>
       );



  return (
    <>
      {error && <h1>{error.message}</h1>}

      <div className="row mx-2 my-2  ">
        {games?.results.map((game) => (
          <div className="col-sm-3 my-2  " key={game.id}>
            <GameCard key={game.id} game={game} />
          </div>
        ))}
      </div>
      <Button
        disabled={!games?.previous}
        onClick={() => setPageNo(pageNo - 1)}
        className="mx-2 my-2 mb-4"
      >
        prev
      </Button>
      <Button
        disabled={!games?.next}
        onClick={() => setPageNo(pageNo + 1)}
        className="mx-2 my-2 mb-4"
      >
        next
      </Button>
    </>
  );
}

export default GamesGrid;
