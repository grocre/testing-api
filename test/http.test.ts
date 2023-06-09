import request from "supertest"
import app from "../source/app"
import {describe, expect, test} from "@jest/globals"

describe("testing http routes on server", () => {
    test("Should return the route is working", async () => {
        const response = await request(app).get("/")
        expect(response.statusCode).toBe(200)
        expect(response.body).toStrictEqual({"message": "okay"})
    })

    test("Should return name received in request object", async () => {
        const response = await request(app)
            .post("/")
            .send({"testName": "test"})
        expect(response.statusCode).toBe(200)
        expect(response.body).toStrictEqual({"name": "test"})
    })

    
    

})