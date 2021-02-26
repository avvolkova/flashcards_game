const fs = require('fs');
const View = require('./view')
const Model = require('./model')





const view = new View()
const model = new Model();
const getQuestionsCallBack = view.superView;

console.log(model.readFile(process.argv[2], getQuestionsCallBack));
