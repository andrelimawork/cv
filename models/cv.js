var mongoose = require('mongoose');

var CvSchema = new mongoose.Schema({
  name: String,
  secondName: String,
  photo: String,
  age: Number,
  address: String,
  phone: String,
  email: String,
  country: String,
  birth: Date,
  sex: String,
  JavascriptKungFu: Array,
  SocialSkills: Array,
  experience: Array,
  schools: Array,
  certificates: Array,
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cv', CvSchema);