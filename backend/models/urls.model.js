//create URL schema

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const urlSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    }
  },
  {
    timestamps: true
  }
);

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;
