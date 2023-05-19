import express, {Request, Response} from "express"

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (request: Request, response: Response) => {
    response.status(200).json({"message": "okay"})
})

export default app 