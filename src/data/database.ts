import { createConnection as createTypeORMConnection } from "typeorm";
import GuestEntity from "./guests/guests.entity";

export default async function createConnection() {
    if (global.connection) {
        await global.connection.close();
    }

    const connection = await createTypeORMConnection({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "client",
        password: "password",
        database: "app",
        entities: [GuestEntity],
        synchronize: true,
        dropSchema: true,
        logging: true,
    });

    global.connection = connection;

    if (__DEV__) {
        // await generateMockedData();
    }

    return connection;
}
