const express = require("express");
const { client } = require("@repo/db/client");

type Request = import("express").Request;
type Response = import("express").Response;

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Hi there");
})

app.post("/signup", async (req: Request, res: Response) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await client.user.create({
        data: {
            username: username,
            password: password
        }
    })
    res.json({
        message: "Signup successful",
        id: user.id
    });
})

app.listen(3002, () => {
    console.log("HTTP server listening on port 3002");
});