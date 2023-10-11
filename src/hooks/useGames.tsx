import { useQuery } from "@tanstack/react-query";
import { Platform } from "./usePlatforms";

import ClientApi, { ListOfData } from "../services/client-api";
import useSearch from "../zustandStates/searchState";
import useGenreState from "../zustandStates/genreState";
import usePlatformState from "../zustandStates/platformState";
import useOrderBy from "../zustandStates/orderByState";

export interface Game {
  id: number;
  slug:string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

const apiObject = new ClientApi<Game>("games");

function useGames(pageNo:number,page_size:number) {

  const { searchWord } = useSearch();
  const {genreId}=useGenreState();
  const{platformId}=usePlatformState();
  const { orderByValue } = useOrderBy();



  const { data: games, error ,isLoading} = useQuery<ListOfData<Game>, Error>({
    queryKey: [
      "games",
      pageNo,
      page_size,
      genreId,
      platformId,
      orderByValue,
      searchWord,
    ],
    queryFn: () =>
      apiObject.getData({
        params: {
          page: pageNo,
          page_size: page_size,
          genres: genreId,
          parent_platforms: platformId,
          ordering: orderByValue,
          search: searchWord,
        },
      }),
  });

  return { games, error, isLoading };
}

export default useGames;
