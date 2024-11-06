import { User } from './IUser';

export interface BlogSummary {
  blogId: string;
  title: string;
  user: User;
  category: string;
  createdAt: Date;
  userId: number;
}
