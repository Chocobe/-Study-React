import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
} from "typeorm";

import BaseEntity from "./Entity";
import User from "./User";
import Post from "./Post";
import Comment from "./Comment";

@Entity("votes")
export default class Vote extends BaseEntity {
  @Column()
  value: number;

  @Column()
  username: string;
  
  @ManyToOne(() => User)
  @JoinColumn({ name: "username", referencedColumnName: "username" })
  user: User;

  @Column({ nullable: true })
  postId: number;

  @ManyToOne(() => Post, post => post.id)
  @JoinColumn({ name: "postId", referencedColumnName: "id" })
  post: Post;

  @Column({ nullable: true })
  commentId: number;

  @ManyToOne(() => Comment, comment => comment.id)
  @JoinColumn({ name: "commentId", referencedColumnName: "id" })
  comment: Comment;
}