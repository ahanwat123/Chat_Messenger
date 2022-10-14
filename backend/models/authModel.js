const { model, Schema } = require("mongoose");

const registerSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    image: {
      type: String,
      require: true,
    },
  },
  { collection: "users" },
  { timestamps: true }
);
registerSchema.set("collection", "users");

const collectionName = "users";

module.exports = model("user", registerSchema, collectionName);
