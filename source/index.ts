import app from "./app"

import "reflect-metadata"
import { AppDataSource } from "./database"

AppDataSource.initialize()

app.listen(3333)