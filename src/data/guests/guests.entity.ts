import { BaseEntity, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class GuestEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;
}
