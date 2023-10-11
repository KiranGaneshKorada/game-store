import useGameTrailer from "../hooks/useGameTrailers"
import imageResize from "../services/image-resize";

interface Props{
    slug:string
}

function GameTrailer({slug}:Props){

    const {gameTrailer,error,isLoading}=useGameTrailer(slug);
    // console.log(JSON.stringify(gameTrailer))

    if(gameTrailer?.results.length==0)
    {
        return (
          <>
            {/* <img
              src={imageResize('')}
              alt="..."
              width="593"
              height="250"
            /> */}
          </>
        );
    }

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
        <video
          width="500"
          height="250"
          poster={imageResize(gameTrailer?.results[0].preview!)}
          controls
        >
          <source src={gameTrailer?.results[0].data[480]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </>
    );

}

export default GameTrailer