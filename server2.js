const express = require('express');
const app = express();
app.use(express.json()); //(middleware) Kiểm tra phần body gửi đến có phải dữ liệu json không

app.get("/products/:id",function(req, res) { //(middleware)
    const params = req.params;
    const productID = params.id;
    res.send('Thong tin san pham ' + productID);
})

app.post('/cart/:id', function(req, res) { //(middleware)
    const params = req.params;
    const cart = params.id;

    const body = req.body;
    const pID = body.pID;
    const quantity = body.quantity;
    const price = body.price;
    res.send('Da them product ' + pID + ' vao gio hang '+ cart +' voi SL ' + quantity + ' gia $' + price);
})

app.listen(3000, function(req, res){
    console.log('3000');
})