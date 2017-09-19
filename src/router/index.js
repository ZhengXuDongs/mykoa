/**
 * Created by Administrator on 2017/6/14.
 */
// var Router = require('koa-router');
import Router from 'koa-router';
import user from './user';
//var user = require('./user');
const log = require('log4js').getLogger('router/index');


const rt = new Router();


rt.get('/pp',ctx=>{
    log.info('第一个页面');
    ctx.body = '第一个页面';
});

rt.use('/user',user.routes());


export default rt;