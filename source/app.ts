import express, {Request, Response} from "express"

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (request: Request, response: Response) => {
    response.status(200).json({"message": "okay"})
})

app.post("/", (request: Request, response: Response) => {
    const { username, password } = request.body 
    
})

export default app 