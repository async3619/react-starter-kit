/* eslint-disable class-methods-use-this,@typescript-eslint/no-unused-vars */
import { Args, Int, Query, Resolver } from "type-graphql";

import IndexableArgs from "../common/indexable.args";

import GuestEntity from "./guests.entity";
import Guest from "./guests.object";

@Resolver()
export default class GuestsResolver {
    @Query(returns => [Guest])
    public async guests(@Args() { index, count }: IndexableArgs): Promise<GuestEntity[]> {
        return GuestEntity.find({
            order: {
                id: "DESC",
            },

            skip: index * count,
            take: count,
        });
    }

    @Query(returns => Int)
    public async guestCount(): Promise<number> {
        return GuestEntity.count();
    }
}
