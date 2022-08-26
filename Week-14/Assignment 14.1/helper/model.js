const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    fname:{ required:true,type:String},
    lname:{ required:true,type:String},
    email:{ required:true,type:String},
    username:{ required:true, type:String,unique: true},
    password:{  required:true,type:String}
})
userSchema.path('username').validate(async (username)=>{
const count_username= await mongoose.models.User.countDocuments({username})

return !count_username
},'Username  Already Exists')
userSchema.path('email').validate(async (email)=>{

    const count_email= await mongoose.models.User.countDocuments({email})
    return !count_email
    },'Email Already Exists')
const userModel=mongoose.model('User',userSchema)



const holdingsSchema=new mongoose.Schema({
    asset_type:{ required:true,type:String,enum: ['RD','FD','STOCKS','MUTUALFUNDS',"FIXEDINCOME","EXPENSES"]},
    asset_id:{ required:true,type:String},
    asset_value:{  required:true,type:Number},
    intrest_rate:{  required:false,type:Number},
    invested_date:{  required:true,type:Date},
    invested_period_years:{  required:false,type:Number},
    maturity_date:{  required:false,type:Date},
    status:{type:String,enum:['ACTIVE','INACTIVE']},
    expense_type:{type:String, required:true,enum:["CREDIT","DEBIT"]},
    document:{type:Buffer,required:false}
})
holdingsSchema.path('asset_id').validate(async (asset_id)=>{
    const count_asset_id= await mongoose.models.Holding.countDocuments({asset_id})

    return !count_asset_id
    },'Asset ID Already Exists')
const holdingModel=mongoose.model('Holding',holdingsSchema)
module.exports={userModel,holdingModel}