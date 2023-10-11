import ClientApi, { ListOfData } from "../services/client-api";
import { useQuery } from "@tanstack/react-query";



export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background:string;
}

const apiObject=new ClientApi<Genre>('genres')



function useGenres() {

    // const {data:genres,error}=useGenericData<Genre>("/genres")

     const { data: genres, error,isLoading } = useQuery<ListOfData<Genre>, Error>({
       queryKey: ["genres"],
       queryFn: apiObject.getData,
       staleTime:24*60*60*1000 //24hrs
       
     });
  

  return { genres, error ,isLoading};
}

export default useGenres;
