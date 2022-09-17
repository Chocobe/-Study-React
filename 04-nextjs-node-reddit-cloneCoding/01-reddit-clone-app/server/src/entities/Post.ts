import {
  BeforeInsert,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";

import {
  Exclude,
  Expose,
} from "class-transformer";

import BaseEntity from "./Entity";
import User from "./User";
import Sub from "./Sub";
import Comment from "./Comment";
import Vote from "./Vote";

import {
  slugify,
  makeId,
} from "../utils/helpers";

@Entity("posts")
export default class Post extends BaseEntity {
  @Index()
  @Column()
  identifier: string;

  @Column()
  title: string;

  @Index()
  @Column()
  slug: string;

  @Column({ nullable: true, type: "text" })
  body: string;

  @Column()
  subName: string;

  @Column()
  username: string;

  @ManyToOne(() => Sub)
  @JoinColumn({ name: "subName", referencedColumnName: "name" })
  sub: Sub;
  
  @ManyToOne(() => User)
  @JoinColumn({ name: "username", referencedColumnName: "username" })
  user: User;

  @Exclude()
  @OneToMany(() => Comment, comment => comment.post)
  comments: Comment[];

  @Exclude()
  @OneToMany(() => Vote, vote => vote.post)
  votes: Vote[];

  @Expose()
  get url() {
    return `r/${this.subName}/${this.identifier}/${this.slug}`;
  }

  @Expose()
  get commentCount() {
    return this.comments?.length;
  }

  @Expose()
  get voteScore() {
    return this.votes.reduce((memo, curt) => memo + (curt.value || 0), 0);
  }

  protected userVote: number;

  setUserVote(user: User) {
    const index = this.votes.findIndex(vote => vote.username === user.username);
    this.userVote = index > -1
      ? this.votes[index].value
      : 0;
  }

  @BeforeInsert()
  makeIdAndSlug() {
    this.identifier = makeId(7);
    this.slug = slugify(this.title);
  }
}