const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
const {Users} = require('./models/Users');
const bodyParser = require('body-parser');

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
//application/json
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://webzzang79:qwe123@cluster0.rvmye.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  // useNewUrlParser :true
  // , useUnifiedTopology:true
  // , useCreateIndex:true
  // , useFindAndModify:false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register', (req, res) => {
  // 회원가입할때 필요한 정보들을 client에서 가져오면
  // 그것들을 db에 insert

  const users = new Users(req.body);
  users.save((err, userInfo) => {
    if(err)return res.json({success:false, err})
    return res.status(200).json({
      success:true
    })
  })


});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})