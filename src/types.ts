export interface UserInfo {
  id:number;
  name: string;
  msTime: number;
}

export interface UsersContextType {
  userData: UserInfo[];
  setUserData:any;
}