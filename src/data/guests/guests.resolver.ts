/* eslint-disable class-methods-use-this,@typescript-eslint/no-unused-vars */
import { Int, Query, Resolver } from "type-graphql";
import GuestEntity from "./guests.entity";

@Resolver()
export default class GuestsResolver {
    @Query(returns => [Int])
    public async guests(): Promise<GuestEntity[]> {
        return GuestEntity.find();
    }

    @Query(returns => Int)
    public async guestCount(): Promise<number> {
        return GuestEntity.count();
    }
}
