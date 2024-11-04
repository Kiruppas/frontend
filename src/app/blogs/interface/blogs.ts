import { User } from './user';

export interface Blog {
  blogId: string;
  title: string;
  user: User;
  category: string;
  createdAt: Date;
  content: string;
  userId: number;
}
