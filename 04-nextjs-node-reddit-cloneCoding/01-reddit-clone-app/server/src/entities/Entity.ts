import { 
  BaseEntity, 
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { instanceToPlain } from "class-transformer";

export default abstract class Entity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  toJSON() {
    const rr = instanceToPlain(this);
    console.log("toJSON(): ", rr);

    return rr;
  }
  
  // toJSON() {
  //   return instanceToPlain(this);
  // }
}