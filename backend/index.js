import express from "express";
import * as massive from "@massive.com/client-js";
import dotenv from "dotenv";
import WebSocket from "ws";
const app=express();
dotenv.config();
const ws = new WebSocket("wss://socket.massive.com/stocks");
const rest = massive.restClient(process.env.API_KEY);

ws.on("open", () => {
    console.log("Connected");
});

ws.on("message", (data) => {
    console.log("Received:", data.toString());
});

ws.on("error", (err) => {
    console.error(err);
});

ws.on("close", () => {
    console.log("Disconnected");
});

//{"action":"auth","params":"y4FYfJGJX8ZrBwr_zwZeIW5e6oRUr20X"}


app.listen(3000,()=>{
    console.log("server is listening at port no 3000");
})



// app.get("/", async (req, res) => {
//   try {
//     const data = await rest.getStocksAggregates({
//   stocksTicker: "AAPL",
//   multiplier: 1,
//   timespan: "day",
//   from: "2026-06-10",
//   to: "2026-06-21"
//   });

//     console.log(data);
//     res.json(data);
//   } catch (e) {
//     console.error(e);
//     res.status(500).json({
//       error: e.message
//     });
//   }
// });


console.log(rest.getStocksAggregates?.toString());

