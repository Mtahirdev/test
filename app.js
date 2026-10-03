import express from "express";

let app = express();

app.get("/test", (req, res) => {
  setTimeout(() => {
    return res.json({ msg: "test successful" });
  }, 2000);
});

app.listen(3000, () => {
  console.log("server is runing on port 3000");
});
