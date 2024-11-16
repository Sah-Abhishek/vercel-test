import express from 'express';
const app = express();
app.use(express.json());
app.use(cors({
    origin: ["https://vishal-kr.vercel.app/"],
    methods: ["POST", "GET"],
    credentilas: true
}));

app.get("/", (req, res) => {
    res.status(200).json({ message: "server is running" });
})

app.listen(5000, console.log("Server started on port 5000"));