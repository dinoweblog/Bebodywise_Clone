const app = require("./index");
const connect = require("./configs/db");
const port = process.env.PORT || 5000;

app.listen(port, "0.0.0.0", async () => {
  try {
    await connect();
    console.log(`listening on port ${port}`);
  } catch (e) {
    console.log(e.message);
  }
});
