const express = require("express");
const app = express();
const cors = require("cors");

const fileHandler = require("fs");
app.use(express.json());

app.use(cors());

const { userRouter } = require("./Routers/routes/userRouter");

app.use("/user", userRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
console.log(global);
