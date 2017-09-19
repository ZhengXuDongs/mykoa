/**
 * Created by Administrator on 2017/6/15.
 */
const log = require('log4js').getLogger('base/user');
import {UserBase} from '../base/user';

export default class UserLogic {
    
    static async SaveUser(ctx){
        let result = false;
        log.info(`pidd的值为：${123}`);
        const pid = ctx.request.query.pid;
        const name = ctx.request.query.name;
        const age = ctx.request.query.age;
        const sex = ctx.request.query.sex;
        const cardID = ctx.request.query.cardID;
        log.info(`pidd的值为：${pid} + ${name} + ${age} + ${cardID}`);
        const userData = {
            pid:pid,
            name:name,
            age:age,
            sex:sex,
            cardID:cardID
        };
        const Save = await UserBase.save({userData});
        log.info(`Save的值为：${Save}`);
        result = {rc:200,Data:Save};
        ctx.body = result;
    }
}

export {UserLogic};