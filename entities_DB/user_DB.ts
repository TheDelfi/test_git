import { Entity, Column, PrimaryGeneratedColumn, TableForeignKey, JoinColumn, ManyToOne, ManyToMany, UpdateDateColumn } from 'typeorm';

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        nullable:false
    })
    name:string
}