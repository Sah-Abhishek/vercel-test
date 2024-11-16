import express from 'express';
const app = express();

app.use("/", (req, res) => {
    res.status(200).json({message: "server is running"});
})

app.listen(5000, console.log("Server started on port 5000"));