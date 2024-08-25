const express = require('express');
const app = express();
app.use(express.json()); //(middleware) Kiểm tra phần body gửi đến có phải dữ liệu json không

//Middleware slide 91
const router = express.Router();
router.use(function (req, res, next) {
    if (!req.headers["x-auth"]) return next("router");
    next();
});

router.get("/user/:id", function (req, res) {
    res.send("hello, user!");
})

app.use("/admin", router, function(req,res) {
    //res.sendStatus(200);
    //res.status(200).send("Thanh");
})

//lấy thông tin sản phẩm xxx
// app.get("/products/:id",function(req, res) { //(middleware)
//     //const params = req.params;
//     const productID = req.params.id;
//     res.send('Thong tin san pham ' + productID);

// })

//thêm sản phẩm vào giỏ hàng
app.post('/cart/:id', function(req, res) { //(middleware)
    const params = req.params;
    const cart = params.id;

    const body = req.body;
    const pID = body.pID;
    const quantity = body.quantity;
    const price = body.price;
    res.send('Da them product ' + pID + ' vao gio hang '+ cart +' voi SL ' + quantity + ' gia $' + price);
})

//lấy thông tin sản phẩm xxx + status
app.get("/products/:id", function(req, res) { //(middleware)
    const productID = req.params.id;
    const response = {
        status: "success",
        data: {
            message: "Thong tin san pham " + productID
        } 
    };
    res.status(200).send(response);
})

// Xóa 1 sản phẩm khỏi giỏ hàng + status
app.delete("/cart/1234/items/:id", function(req, res) {
    const id = req.params.id;
    const response = {
        status: "success",
        data: {
            message: "Da xoa SP " + id + " khoi gio hang 1234"
        }
    };
    res.status(200).send(response);
})

app.get('/null', function(req, res) {
    const response = {
        status: "fail",
        data: {
            message: "Not Found"
        }
    }
    res.status(404).send(response);
})

app.listen(3000, function(req, res){
    console.log('3000');
})