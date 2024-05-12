const mongoose=require ("mongoose");
const Chat=require("./models/chat.js")


main()
.then(()=>{
    console.log("connection successfull")
})
.catch((err) => console.log(err))

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



let allChats= [
    {
    from:"adi",
    to:"suku",
    msg:"send notes",
    created_at: new Date()
},
    {
    from:"raju",
    to:"jaddu",
    msg:"send laduu",
    created_at: new Date()
},
    {
    from:"bheem",
    to:"kirmada",
    msg:"send Dholakpur",
    created_at: new Date()
},

]

Chat.insertMany(allChats);
