/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export default class Guest {
    @Field(type => Int)
    public id: number;

    @Field()
    public title: string;

    @Field()
    public content: string;

    @Field()
    public createdAt: Date;

    @Field()
    public updatedAt: Date;
}
