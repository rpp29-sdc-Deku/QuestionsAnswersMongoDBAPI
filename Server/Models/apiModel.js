const mongoose = require('mongoose');
const { Schema } = mongoose;

//connect to my mongoDB
mongoose.connect('mongodb://localhost/qandaapi', { useNewUrlParser: true, useUnifiedTopology: true }, {})
.then(() => console.log('MongoDB Connection Successful'))
.catch(err => console.log(err));

// create answerSchema for nesting
const answerSchema = new Schema({
  answer_id: Number,
  answer_body: String,
  answerer_name: String,
  answer_helpfulness: Number,
  photos: [String],
  answer_date: Date
});

// create QandASchema schema
const QandASchema = new Schema({
  id: {type: Number, unique: true},
  product_id: Number,
  question_id: Number,
  question_body: String,
  asker_name: String,
  question_helpfulness: Number,
  reported: Boolean,
  question_date: Date,
  answers: [answerSchema]
});


const QandAAPI = mongoose.model('QandA', QandASchema);
const example = new QandAAPI ({
  id: 1,
  product_id: 1234,
  question_id: 33,
  question_body: 'This is example question',
  asker_name: 'beveryly',
  question_helpfulness: 2,
  reported: false,
  question_date: Date(),
  answers: new answerSchema ({
    answer_id: 23,
    answer_body: 'This is an answer',
    answerer_name: 'Nelly',
    answer_helpfulness: 4,
    photos: ['url.com'],
    answer_date: Date()
  })
})
module.exports = QandAAPI;