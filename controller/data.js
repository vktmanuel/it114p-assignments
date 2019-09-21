const Data = require('../models/data');

exports.getAddData = (req, res, next) => {
  res.render('add-data', {
    pageTitle: 'Add Data',
    path: 'add-data'
  });
};

exports.postAddData = (req, res, next) => {
  const data = new Data(req.body.user,req.body.pass);
  data.save();
  res.redirect('/');
};


