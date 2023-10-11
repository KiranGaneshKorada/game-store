import { useQuery } from "@tanstack/react-query";
import ClientApi, { ListOfData } from "../services/client-api";

export interface GameTrailerInterface {
    id:number
    name:string
    preview:string
    data:{'480':string,'max':string}
}

function useGameTrailer(slug: string) {
  const endPoint = `/games/${slug}/movies`;

  const apiObject = new ClientApi<GameTrailerInterface>(endPoint);

  const {
    data: gameTrailer,
    error,
    isLoading,
  } = useQuery<ListOfData<GameTrailerInterface>, Error>
  ({
    queryKey: ["gameTrailer", slug],
    queryFn: apiObject.getData,
    staleTime: 60 * 60 * 1000, //1hr
  });
  return { gameTrailer, error, isLoading };
}

export default useGameTrailer;
