/**
 * Created by Administrator on 2017/6/14.
 */
// const sleep = async (ms) => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(true)
//         }, ms)
//     })
// };
// module.exports = {
//     login (ctx) {
//         ctx.body = {
//             username: ctx.request.body.username
//         }
//     },
//     async profile (ctx) {
//         await sleep(1000);
//         ctx.body = {
//             username: '相学长',
//             sex: 'man',
//             age: '999'
//         }
//     }
// };

import Router from 'koa-router';
const rt = new Router();
const log = require('log4js').getLogger('router/user');
import {UserLogic} from '../logic/user';

log.info('user页面');

rt.get('/api/user',ctx=>{
    log.info('第一个页面');
    ctx.body = '第一个页面';
});
rt.get('/api/save',UserLogic.SaveUser);

export default rt;
