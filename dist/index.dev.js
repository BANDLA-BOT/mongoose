"use strict";

var express = require("express");

var mongoose = require("mongoose");

var cors = require("cors"); // const User = require('./models/todos/user.models.js')
// const Orders = require('./models/ecommerce/order.models.js')


var User = require("./models/users/user.js");

var Product = require("./models/products/product.js");

mongoose.connect("mongodb://localhost:27017/DataModelling").then(function () {
  console.log("Database connected");
})["catch"](function (error) {
  console.log(error.message);
});
var app = express();
app.use(express.json());
app.use(cors());
app.post("/createprod", function _callee(req, res) {
  var newProduct;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          newProduct = new Product({
            title: req.body.title,
            description: req.body.description,
            rating: req.body.rating,
            price: req.body.price
          });
          _context.next = 4;
          return regeneratorRuntime.awrap(newProduct.save());

        case 4:
          res.json({
            Product: newProduct
          });
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json(_context.t0.message);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
app.post("/createuser", function _callee2(req, res) {
  var newUser;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          newUser = new User({
            name: req.body.name,
            email: req.body.email,
            phno: req.body.phno
          });
          _context2.next = 4;
          return regeneratorRuntime.awrap(newUser.save());

        case 4:
          res.json({
            user: newUser
          });
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json(_context2.t0.message);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // app.post('/', async(req,res)=>{
//     try {
// const iterations = 10
// for(let i=0; i<=5;i++){
//     await User.create({
//         firstName:req.body.firstName,
//         lastName:req.body.lastName,
//         age:i,
//         gender:req.body.gender,
//         // email:req.body.email,
//         phone:req.body.phone,
//         // username:req.body.username,
//         password:req.body.password,
//         height:req.body.height,
//         weight:req.body.weight,
//         eyeColor:req.body.eyeColor
//     })
// }
// res.status(201).json({message:"Created", user:newUser})
// const iterations = 10
// for(let i=0; i<=iterations;i++){
//     await Orders.create({
//         // orderItems,
//         // address,
//         orderPrice:Math.floor(Math.random()*100)
//     })
// }
// res.json()
//     } catch (error) {
//         res.json({message:error.message})
//     }
// })
// app.post('/', async(req,res)=>{
//     try {
//         const orderDetails = new Orders({
//             orderPrice:req.body.orderPrice,
//             address:req.body.address,
//             // status:req.body.status,
//         })
//         // orderDetails.customer.push(customerId)
//         await orderDetails.save()
//         res.json({message:"Order created", order:orderDetails})
//     } catch (error) {
//         res.status(500).json({message:"Internal server error", error:error.message})
//     }
// })
// app.put('/put/:id/:customerId', async(req,res)=>{
//     try {
//         const {id, customerId} = req.params
//         const order = await Orders.findOneAndUpdate({_id:id},{$push:{customer:req.params.customerId}})
//         res.json({message:"ADDED"})
//     } catch (error) {
//         res.json({message:"Internal server Error", error:error.message})
//     }
// })
// app.get('/orders', async(req,res)=>{
//     try {
//         const orders = await Orders.find().populate('customer')
//         res.json({orders:orders})
//     } catch (error) {
//     }
// })
// app.get('/aggr', async(req,res)=>{
//     try {
// const aggregate = await Orders.aggregate([
//     {$match:{orderPrice:{$gt:1000}}},
//     {$group:{
//         _id:null,
//         avgPrice:{$avg:'$orderPrice'},
//         minPrice:{$min:'$orderPrice'},
//         maxPrice:{$max:'$orderPrice'},
//         totalPrice:{$sum:'$orderPrice'},
//         orderCount:{$sum:1}
//     }},
//     {$sort:{minPrice:1}},
//     {$match:{maxPrice:{$lt:10000}}}
// ])
// const aggregate = await Orders.aggregate([
//     {$unwind:'$customer'},
//     {$group:{
//         _id:"$customer",
//         AllCustomers:{$sum:1},
//         orderDetails:{$push:'$orderPrice'}
//     }},
//     // {$addFields:{billerAddress:"$address"}}
//     {$project:{
//         _id:1,
//         AllCustomers:1,
//         orderDetails:1
//     }},
//     {$sort:{_id:1}},
//     {$limit:6}
// ])
// res.json({message:aggregate, count:aggregate.length})
//     } catch (error) {
//     }
// })
// app.get('/get', async(req,res)=>{
//    try {
// const user = await User.find().where('username').eq('guruprasad')
// if(!user){
//     throw new Error("Error while fetching or No users available")
// }
// else{
//     return res.json({message:"User fetched",user:user})
// }
// const {username} = req.body
// const doc = await User.replaceOne({username:username}, {password:"12345667888"})
// res.json({User:doc})
// const query = User.findOne({username:"guruprasad"})
// query.select('username')
// const person = await query.exec();
// console.log(person.username)
// res.json({email:person})
// const user = await User.find({_id:'668faba9f10aecaccf501ea7'})
//                         .where("lastName")
//                         .eq('Prasad')
//                         .where("height").gt(2).lt(10)
// const user = await User.find().sort({firstName:1})
// const user = await User.find().limit(1).select('-password -email')
// for await(const doc of User.find()){
//     res.json({message:"Queried", user:doc})
// }
// res.json({message:"Queried", user:user})
//    } catch (error) {
//     res.json({message:"Internal server error", error:error.message})
//    }
// })
// app.all('*', (req,res,next)=>{
//     // res.status(404).json({
//     //     status:'fail',
//     //     message:`Can't find ${req.originalUrl} on the server`
//     // })
//     const err = new Error(`Can't find ${req.originalUrl} on the server`)
//     err.status = 'fail',
//     err.statusCode = 404
//     next(err)
// })
// app.use((error, req,res, next)=>{
//     error.statusCode = error.statusCode || 500;
//     error.status = error.status || 'error'
//     res.status(error.statusCode).json({
//         status:error.statusCode,
//         message:error.message
//     })
// })

app.listen(8000, function () {
  console.log("Running");
});
//# sourceMappingURL=index.dev.js.map
