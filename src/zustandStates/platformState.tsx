import { create } from "zustand";

interface PlatformStateInterface {
  platformId: number | null;
  platformName:string
  onClickingOnPlatform: (id: number|null,name:string) => void;
}

const usePlatformState = create<PlatformStateInterface>((setOrUpdateState) => ({
  platformId: null,
  platformName:'All',
  onClickingOnPlatform: (id,name) => setOrUpdateState(() => ({ platformId: id , platformName:name })),
}));

export default usePlatformState;
