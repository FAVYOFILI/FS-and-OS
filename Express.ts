import express, { Application, Request, Response } from "express";

const app:Application = express();
const port = 4050;


app.get("/", (req:Request, res:Response) => {
// res.send("This is an express server")
res.status(200).send("Express Server");
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
});