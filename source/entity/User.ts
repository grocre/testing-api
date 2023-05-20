import { Entity, Column, Unique, PrimaryGeneratedColumn } from "typeorm"

@Entity()
@Unique(["username"])
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column("text")
    username: string
}