const mongoose = require("mongoose");

var postSchema = mongoose.Schema({
  name: String,
  image: String,
  description: String,

  // 
  title: { type: String, required: true, unique: true },
  // state (draft and published)
  // read_count
  // reading_time
  // tags
  body: { type: String, required: true },
  timestamp: Date,
  // 
  
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    username: String,
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
}, {timestamps: true});

module.exports = mongoose.model("Post", postSchema);
