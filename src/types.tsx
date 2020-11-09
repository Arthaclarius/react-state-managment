export interface IUser {
  id: string;
  nickname: string;
  avatar: string;
  email: string;
  color: string;

  friends?: IUser[];
  chats?: IChat[];
}
export interface IChat {
  id: string;
  name: string;

  users: IUser[];
  messages: IMessage[];
}
export interface IMessage {
  id: string;
  text: string;
  media?: string;
  date: number;
  user: IUser;
}
