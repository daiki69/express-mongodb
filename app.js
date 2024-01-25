const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://daiki6guitar:xBT6tbIrGJP5eUgC@test.gloelrv.mongodb.net/?retryWrites=true&w=majority"
).then(() => console.log("データベース接続に成功しました"))
.catch((err) => console.log(err));

app.listen(3000, () => {
console.log("サーバが起動しました。")
})
