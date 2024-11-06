import { User } from './IUser';

export interface Blog {
  blogId: number;
  title: string;
  user: User;
  category: string;
  createdAt: Date;
  content: string;
  userId: number;
}
