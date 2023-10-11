import axios, { AxiosRequestConfig } from "axios";


export interface ListOfData<Generic> {
  count:number
  next:string
  previous:string
  results: Generic[];
}


const apiClient= axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "aa04471e29f4438bb6231bd81440f12e" },
});


class ClientApi<Generic>{
  endPoint:string

  constructor(endPoint:string){
    this.endPoint=endPoint
  }


  getData=(filters:AxiosRequestConfig)=>{
    return apiClient.get<ListOfData<Generic>>(this.endPoint,filters).then((res)=>res.data)
  }
  getSingleData=(filters:AxiosRequestConfig)=>{return apiClient.get<Generic>(this.endPoint,filters).then((res)=>res.data)}

}

export default ClientApi;