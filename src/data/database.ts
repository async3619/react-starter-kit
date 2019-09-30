import { createConnection as createTypeORMConnection } from "typeorm";
import GuestEntity from "./guests/guests.entity";

function generateRandomBytes(length: number) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

async function generateMockedData() {
    let mockedGuests: GuestEntity[] = [];
    for (let i = 0; i < 50; ++i) {
        const guest = new GuestEntity();
        guest.title = generateRandomBytes(35);
        guest.content = generateRandomBytes(256);

        mockedGuests.push(guest);
    }

    mockedGuests = await GuestEntity.save(mockedGuests);
}

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
        await generateMockedData();
    }

    return connection;
}
