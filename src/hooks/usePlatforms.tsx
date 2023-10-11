import { useQuery } from "@tanstack/react-query";
import ClientApi, { ListOfData } from "../services/client-api";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiObject = new ClientApi<Platform>("/platforms/lists/parents");


function usePlatforms() {
  const { data: platforms, error,isLoading } = useQuery<ListOfData<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiObject.getData,
    staleTime:24*60*60*1000 //24hrs

  });


  return { platforms, error, isLoading };
}

export default usePlatforms;
