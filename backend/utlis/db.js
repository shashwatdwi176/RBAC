import mongoose from "mongoose";


const DbCon=async()=>{
    try {
       await mongoose.connect('mongodb://127.0.0.1:27017/role_base_access_control', {
        useNewUrlParser: true,
        useUnifiedTopology: true,}
      )
       console.log('mongo db is connected')
    } catch (error) {
        console.log(error)
    }
}

export default DbCon