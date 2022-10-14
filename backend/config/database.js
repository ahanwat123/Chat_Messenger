const mongoose = require("mongoose");

const databaseConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("databse connected succesfully");
    })
    .catch((error) => {});
};

module.exports = databaseConnect;
