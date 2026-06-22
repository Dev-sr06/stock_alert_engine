import express from "express";
import * as massive from "@massive.com/client-js";

const app=express();

app.listen(3000,()=>{
    console.log("server is listening at port no 3000");
})
const rest = massive.restClient("y4FYfJGJX8ZrBwr_zwZeIW5e6oRUr20X");


app.get("/", async (req, res) => {
  try {
    const data = await rest.getStocksAggregates({
  stocksTicker: "AAPL",
  multiplier: 1,
  timespan: "day",
  from: "2026-06-20",
  to: "2026-06-21"
  });

    console.log(data);
    res.json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      error: e.message
    });
  }
});


console.log(rest.getStocksAggregates?.toString());

