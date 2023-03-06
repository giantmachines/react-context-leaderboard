export interface UserInfo {
  id:number;
  name: string;
  msTime: number;
}

export interface UsersContextType {
  userData:UserInfo[];
  setUserData:(userData:UserInfo[]) => void;
  currentTime:number;
  setCurrentTime:(currentTime:number) => void;
}