import { create } from "zustand"


interface SearchStateInterface{
    searchWord:string
    setSearchWord:(searchInput:string)=>void
}

const useSearch=create<SearchStateInterface>((updateState) => ({
  searchWord: "",
  setSearchWord: (searchInput: string) =>
    updateState(() => ({ searchWord: searchInput })),
}));

export default useSearch;

