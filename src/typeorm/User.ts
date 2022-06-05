import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  id: number;
  @Column({
    nullable: false,
  })
  userName: string;
  @Column({
    nullable: false,
  })
  emailId: string;
  @Column({
    nullable: false,
  })
  mobileNumber: string;
  @Column({
    nullable: false,
  })
  homeAdress: string;
  @Column({
    nullable: false,
  })
  officeAdress: string;
}
