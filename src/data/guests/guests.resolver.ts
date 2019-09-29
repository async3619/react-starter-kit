/* eslint-disable class-methods-use-this,@typescript-eslint/no-unused-vars */
import { Int, Query, Resolver } from "type-graphql";

@Resolver()
export default class GuestsResolver {
    @Query(returns => [Int])
    public async guests(): Promise<number[]> {
        return [];
    }
}
