var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shoppingDB', {useNewUrlParser: true});

var products = [
  new Product({
    imagePath: 'https://d2skuhm0vrry40.cloudfront.net/2019/articles/2019-02-16-14-03/fifa_19_old_cover.jpg/EG11/resize/690x-1/quality/75/format/jpg',
    title: 'FIFA 19',
    description: 'Soccer Game',
    price: '150000'
  }),
  new Product({
    imagePath: 'https://static.raru.co.za/cover/2018/06/19/6718422-l.jpg?v=1533294578',
    title: 'CALL OF DUTY BLACK OPS IV',
    description: 'FPS GAME',
    price: '130000'
  }),
  new Product({
    imagePath: 'https://www.compraecuador.com.ec/web/image/product.product/2200/image',
    title: 'UNCHARTED 4',
    description: 'ADVENTURE GAME',
    price: '100000'
  }),
  new Product({
    imagePath: 'https://d2skuhm0vrry40.cloudfront.net/2019/articles/2019-02-16-14-03/fifa_19_old_cover.jpg/EG11/resize/690x-1/quality/75/format/jpg',
    title: 'FIFA 19',
    description: 'Soccer Game',
    price: '150000'
  }),
  new Product({
    imagePath: 'https://static.raru.co.za/cover/2018/06/19/6718422-l.jpg?v=1533294578',
    title: 'CALL OF DUTY BLACK OPS IV',
    description: 'FPS GAME',
    price: '130000'
  }),
  new Product({
    imagePath: 'https://www.compraecuador.com.ec/web/image/product.product/2200/image',
    title: 'UNCHARTED 4',
    description: 'ADVENTURE GAME',
    price: '100000'
  })
];

var done = 0;
for (var i = 0; i < products.length; i++){
  products[i].save(function(err, result){
    done++;
    if(done === products.length){
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}

