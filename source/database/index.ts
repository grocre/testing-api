import { DataSource } from "typeorm"
import { User } from "../entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "users",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
})