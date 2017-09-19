/**
 * Created by Administrator on 2017/6/15.
 */
import mongoose from 'mongoose';

var Schema = new mongoose.Schema;

const UserSchema = new mongoose.Schema({
    pid:{type:String,unique:true,require:true},//用户唯一标志
    name:{type:String,default:''},
    age:{type:Number,default:''},
    sex:{type:String,default:''},
    cardID:{type:String,default:''}
});

export default mongoose.model('user',UserSchema,'user');