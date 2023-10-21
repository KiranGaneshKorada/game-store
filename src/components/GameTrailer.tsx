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
      <div className="mx-0">
        <video
          height='95%'
          width='95%'
          poster={imageResize(gameTrailer?.results[0].preview!)}
          className="video-custom-css"
          controls
          src={gameTrailer?.results[0].data[480]}
          // type="video/mp4"
        ></video>
      </div>
    );

}

export default GameTrailer