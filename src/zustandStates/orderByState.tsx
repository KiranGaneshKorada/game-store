import { create } from "zustand"


interface OrderByStateInterface {
  orderByValue: string;
  orderBylabel: string;
  setOrderByValue: (order: string,label:string) => void;
}

const useOrderBy=create<OrderByStateInterface>(setOrUpdateState=>({orderByValue:'',orderBylabel:'Relevance',setOrderByValue:(value,label)=>(setOrUpdateState(()=>({orderByValue:value,orderBylabel:label})))}))

export default useOrderBy;