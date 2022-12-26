import mongoose from "mongoose"

async function connect(){
    await mongoose.connect("mongodb+srv://rohansadafule:Newmernproject@cluster0.jomtob9.mongodb.net/?retryWrites=true&w=majority")
    console.log('MongoDB connection is succcessful.')

} 

export default connect;