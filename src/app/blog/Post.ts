import { User } from "./User";

export interface Post {
  userId: string;
  id: string;
  title: string;
  body: string;
  user?: User;
  comments?: Comment[] 
}

export interface Comment {
  postId: string;
  userId?: any;
  id: string;
  name: string;
  body: string;
  email: string;
}
