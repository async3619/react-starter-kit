import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export default class GuestEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column("text")
    public title: string;

    @Column("text")
    public content: string;

    @CreateDateColumn()
    public createdAt: Date;

    @UpdateDateColumn()
    public updatedAt: Date;
}
