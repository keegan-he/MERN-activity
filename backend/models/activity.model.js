const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const activitySchema = new Schema(
  {
    username: { type: String, required: true },
    activity_description: { type: String, required: true },
    activity_duration: { type: Number, required: true },
    date: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
