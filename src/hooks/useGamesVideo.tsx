import { useQuery } from "@tanstack/react-query";

import ClientApi, { ListOfData } from "../services/client-api";

export interface ScreenShots{
    id:number
    image:string
}


function useGamesVideo(slug: string, page_size: number) {
  const endPoint = `/games/${slug}/screenshots`;

  const apiObject = new ClientApi<ScreenShots>(endPoint);

  const {
    data: screenShots,
    error,
    isLoading,
  } = useQuery<ListOfData<ScreenShots>, Error>({
    queryKey: ["games", page_size, slug],
    queryFn: () => apiObject.getData({}),
  });

  return { screenShots, error, isLoading };
}

export default useGamesVideo;
