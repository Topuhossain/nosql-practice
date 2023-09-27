import mongoose from "mongoose";
import config from "./config";
import app from "./app";
async function run() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("sucessfully connected data");
    app.listen(config.port, () => {
      console.log(config.port, "succesfully running server");
    });
  } catch (err) {
    console.log(err);
  }
}

run();
