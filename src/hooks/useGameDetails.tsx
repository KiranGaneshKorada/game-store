import { useQuery } from "@tanstack/react-query";
import ClientApi from "../services/client-api";
import { Platform } from "./usePlatforms";

export interface GameDetails {
  id: number;
  name: string;
  description_raw: string;
  released:string
  background_image: string;
  website: string;
  rating:number
  parent_platforms:{platform:Platform}[];
  genres:{id:number,name:string}[]
  publishers:{name:string}[]
}



function useGameDeatails(slug: string) {
  const endPoint = `/games/${slug}`;

  const apiObject = new ClientApi<GameDetails>(endPoint);

  const {
    data: game,
    error,
    isLoading,
  } = useQuery<GameDetails, Error>({
    queryKey: ["gameDetails", slug],
    queryFn: apiObject.getSingleData,
    staleTime: 60 * 60 * 1000, //1hr
  });
  return { game, error, isLoading };
}

export default useGameDeatails;
