"use strict";

var express = require('express');

var mongoose = require('mongoose');

var cors = require('cors');

var User = require('./models/todos/user.models.js');

var Orders = require('./models/ecommerce/order.models.js');

mongoose.connect('mongodb://localhost:27017/DataModelling').then(function () {
  console.log('Database connected');
})["catch"](function (error) {
  console.log(error.message);
});
var app = express();
app.use(express.json());
app.use(cors()); // app.post('/', async(req,res)=>{
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

app.post('/', function _callee(req, res) {
  var orderDetails;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          orderDetails = new Orders({
            orderPrice: req.body.orderPrice,
            address: req.body.address // status:req.body.status,

          }); // orderDetails.customer.push(customerId)

          _context.next = 4;
          return regeneratorRuntime.awrap(orderDetails.save());

        case 4:
          res.json({
            message: "Order created",
            order: orderDetails
          });
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: "Internal server error",
            error: _context.t0.message
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
app.put('/put/:id/:customerId', function _callee2(req, res) {
  var _req$params, id, customerId, order;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$params = req.params, id = _req$params.id, customerId = _req$params.customerId;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Orders.findOneAndUpdate({
            _id: id
          }, {
            $push: {
              customer: req.params.customerId
            }
          }));

        case 4:
          order = _context2.sent;
          res.json({
            message: "ADDED"
          });
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          res.json({
            message: "Internal server Error",
            error: _context2.t0.message
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
app.get('/orders', function _callee3(req, res) {
  var orders;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Orders.find().populate('customer'));

        case 3:
          orders = _context3.sent;
          res.json({
            orders: orders
          });
          _context3.next = 9;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
app.get('/get', function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          try {
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
            res.json({
              message: "Queried",
              user: user
            });
          } catch (error) {
            res.json({
              message: "Internal server error",
              error: error.message
            });
          }

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
});
app.listen(8000, function () {
  console.log("Running");
});
//# sourceMappingURL=index.dev.js.map
