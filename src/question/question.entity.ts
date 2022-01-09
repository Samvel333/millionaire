import {Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('question')
export class QuestionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  gamequestion: string;

  @Column()
  answers: string;

  @Column()
  theTrueVariant: number;

  // @Column({ type: 'enum', enum: Role, default: Role.USER })
  // role: Role;
}
