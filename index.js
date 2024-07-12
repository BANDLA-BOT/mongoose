const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const User = require('./models/todos/user.models.js')
// const Orders = require('./models/ecommerce/order.models.js')
const User = require("./models/users/user.js");
const Product = require("./models/products/product.js");
mongoose
  .connect("mongodb://localhost:27017/DataModelling")
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error.message);
  });
const app = express();
app.use(express.json());
app.use(cors());

app.post("/createprod", async (req, res) => {
  try {
    const newProduct = new Product({
      title: req.body.title,
      description: req.body.description,
      rating: req.body.rating,
      price: req.body.price,
    });

    await newProduct.save();
    res.json({ Product: newProduct });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

app.post("/createuser", async(req, res) => {
  try {
    const newUser = new User({
        name:req.body.name,
        email:req.body.email,
        phno:req.body.phno
    })
    await newUser.save()
    res.json({user:newUser})
  } catch (err) {
    res.status(500).json(err.message);
  }
});
// app.post('/', async(req,res)=>{
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

app.listen(8000, () => {
  console.log("Running");
});
