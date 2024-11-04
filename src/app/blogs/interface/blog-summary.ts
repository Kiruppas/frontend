<<<<<<< HEAD
import { DatePipe } from "@angular/common";
import { User } from "./user";
=======
import { User } from './user';
>>>>>>> a8585d020f146fa2bf5c4c174a493aaf275dbf3a

export interface BlogSummary {
  blogId: string;
  title: string;
  user: User;
  category: string;
  createdAt: Date;
  userId: number;
}
