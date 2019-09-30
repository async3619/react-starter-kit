/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArgsType, Field, Int } from "type-graphql";
import { Max, Min } from "class-validator";

@ArgsType()
export default class IndexableArgs {
    @Field(type => Int, { defaultValue: 0 })
    @Min(0)
    public index: number;

    @Field(type => Int)
    @Min(1)
    @Max(50)
    public count: number;

    public startIndex = this.index * this.count;
    public endIndex = this.index * this.count + this.count;
}
