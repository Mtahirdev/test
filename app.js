import express from "express";

let app = express();

app.get("/test", (req, res) => {
  setTimeout(() => {
    return res.json({ msg: "test successful" });
  }, 2000);
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
