const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to the Express API!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});