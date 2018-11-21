const ApiError = require('../error/ApiError');
const ApiErrorNames = require('../error/ApiErrorNames');

const model = require('../../db/model');

const User = model.User;
User.sync({alter: true});


//获取用户
exports.getUser = async (ctx, next) => {
    if(ctx.query.id != 1){
        throw new ApiError(ApiErrorNames.USER_NOT_EXIST);
    }
    ctx.body={
        name:'哈哈',
        des:'测试哈哈哈'
    }
}

//用户注册
exports.registerUser = async (ctx, next) => {
    console.log('registerUser', ctx.request.body);
}
