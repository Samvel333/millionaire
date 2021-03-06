import {Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('game')
export class GameEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_username: string;

  @Column()
  score: string;
}
