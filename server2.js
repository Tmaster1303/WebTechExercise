const express = require('express');
const app = express();
app.use(express.json()); //(middleware) Kiểm tra phần body gửi đến có phải dữ liệu json không
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Middleware slide 91
const router = express.Router();

/** chưa xong
 * @openapi
 * /cart/1234/items/{id}:
 *  delete:
 *      sumary: Delete item
 *      description: Delete an item in cart of an user 
 *      parameters:
 *          - in: path
 *              name: cartid
 *              description: ID of the product
 *              required: true
 *              schema: 
 *                  type: string
 *  *          - in: path
 *              name: id
 *              description: ID of the product
 *              required: true
 *              schema: 
 *                  type: string
 *      responses:
 *          200:
 *              description: Details
 *              content:
 *                     application/json:
 *                         schema:
 *                             type: object
 *                            properties:
 *                                 status:
 *                                     type: string
 *                                     enum: [success, fail, error]
 *                                 data:
 *                                     type: object
 *                                     properties:
 *                                         message:
 *                                             type: string

 */

router.use(function (req, res, next) {
    if (!req.headers["x-auth"]) return next("router");
    next();
});

router.get("/user/:id", function (req, res) {
    res.send("hello, user!");
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
    res.status(200).json(response);
})

// Xóa 1 sản phẩm khỏi giỏ hàng + status
app.delete("/cart/:cartid/items/:id", function(req, res) {
    const id = req.params.id;
    const cartid = req.params.cartid;
    const response = {
        status: "success",
        data: {
            message: "Da xoa SP " + id + " khoi gio hang " + cartid
        }
    };
    res.status(200).json(response);
})

app.use('/:unknow',function(req, res) {
    const unknow = req.params.unknow;
    const response = {
        status: "fail",
        data: {
            message: "Not Found /" + unknow
        }
    }
    res.status(404).json(response);
})

app.listen(3000, function(req, res){
    console.log('3000');
})