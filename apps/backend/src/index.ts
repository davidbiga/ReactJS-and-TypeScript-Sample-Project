import express from "express";
import { getApods } from "./controllers/nasa";

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.static('public'))

app.get("/apods", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(await getApods())
});

app.listen(PORT, () => console.log(`⚡Server is running here 👉 https://localhost:${PORT}`));