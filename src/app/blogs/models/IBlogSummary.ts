<<<<<<< HEAD:src/app/blogs/interface/blog-summary.ts
<<<<<<< HEAD
import { DatePipe } from "@angular/common";
import { User } from "./user";
=======
import { User } from './user';
>>>>>>> a8585d020f146fa2bf5c4c174a493aaf275dbf3a
=======
import { User } from './IUser';
>>>>>>> 4940b0423ab56c333d0f66d0b50222afdcc37425:src/app/blogs/models/IBlogSummary.ts

export interface BlogSummary {
  blogId: string;
  title: string;
  user: User;
  category: string;
  createdAt: Date;
  userId: number;
}
